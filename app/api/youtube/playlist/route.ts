import { NextResponse } from 'next/server';

const PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID || 'PLetnELr5c_JVwUtuFKM9wGjGKrKPrGmsa';
const API_KEY = process.env.YOUTUBE_API_KEY || '';

export interface YouTubeVideo {
    videoId: string;
    title: string;
    description: string;
    thumbnail: string;       // hqdefault thumbnail URL
    publishedAt: string;
    duration: string;        // e.g. "3:47"
    viewCount: number;
    likeCount: number;
    commentCount: number;
    playlistPosition: number;
}

/**  Convert ISO 8601 duration (PT3M47S) → "3:47"  */
function parseDuration(iso: string): string {
    const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return '0:00';
    const h = parseInt(match[1] || '0');
    const m = parseInt(match[2] || '0');
    const s = parseInt(match[3] || '0');
    const ss = s.toString().padStart(2, '0');
    if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${ss}`;
    return `${m}:${ss}`;
}

export async function GET() {
    if (!API_KEY || API_KEY === 'YOUR_YOUTUBE_API_KEY_HERE') {
        return NextResponse.json(
            { error: 'YouTube API key not configured. Add YOUTUBE_API_KEY to .env.local' },
            { status: 500 }
        );
    }

    try {
        // ── Step 1: Get all playlist items (video IDs + basic info) ──────────
        const allItems: {
            videoId: string;
            title: string;
            description: string;
            thumbnail: string;
            publishedAt: string;
            position: number;
        }[] = [];

        let pageToken: string | undefined;

        do {
            const params = new URLSearchParams({
                part: 'snippet',
                playlistId: PLAYLIST_ID,
                maxResults: '50',
                key: API_KEY,
                ...(pageToken ? { pageToken } : {}),
            });

            const res = await fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems?${params}`,
                { next: { revalidate: 3600 } }   // cache 1 hour
            );

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error?.message || 'Failed to fetch playlist items');
            }

            const data = await res.json();
            pageToken = data.nextPageToken;

            for (const item of data.items) {
                const snippet = item.snippet;
                const videoId = snippet.resourceId?.videoId;
                if (!videoId || snippet.title === 'Private video' || snippet.title === 'Deleted video') continue;

                allItems.push({
                    videoId,
                    title: snippet.title,
                    description: snippet.description || '',
                    thumbnail:
                        snippet.thumbnails?.maxres?.url ||
                        snippet.thumbnails?.high?.url ||
                        snippet.thumbnails?.medium?.url ||
                        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
                    publishedAt: snippet.publishedAt,
                    position: snippet.position,
                });
            }
        } while (pageToken);

        if (allItems.length === 0) {
            return NextResponse.json({ videos: [] });
        }

        // ── Step 2: Get duration + statistics for all videos ─────────────────
        const videoIds = allItems.map(v => v.videoId).join(',');
        const statsParams = new URLSearchParams({
            part: 'contentDetails,statistics',
            id: videoIds,
            key: API_KEY,
        });

        const statsRes = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?${statsParams}`,
            { next: { revalidate: 3600 } }
        );

        const statsData = await statsRes.json();

        const statsMap: Record<string, { duration: string; viewCount: number; likeCount: number; commentCount: number }> = {};
        for (const item of statsData.items || []) {
            statsMap[item.id] = {
                duration: parseDuration(item.contentDetails?.duration || 'PT0S'),
                viewCount: parseInt(item.statistics?.viewCount || '0'),
                likeCount: parseInt(item.statistics?.likeCount || '0'),
                commentCount: parseInt(item.statistics?.commentCount || '0'),
            };
        }

        // ── Step 3: Merge & return ───────────────────────────────────────────
        const videos: YouTubeVideo[] = allItems.map(item => ({
            ...item,
            playlistPosition: item.position,
            ...(statsMap[item.videoId] || { duration: '0:00', viewCount: 0, likeCount: 0, commentCount: 0 }),
        }));

        return NextResponse.json({ videos }, { status: 200 });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        console.error('[YouTube API] Error:', message);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
