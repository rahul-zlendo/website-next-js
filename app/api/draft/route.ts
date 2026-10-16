import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

/**
 * Enables Next.js Draft Mode for Sanity live preview.
 * Call: /api/draft?secret=<SANITY_PREVIEW_SECRET>&slug=<path>
 */
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const slug = request.nextUrl.searchParams.get('slug') ?? '/in';

  // Validate the secret token
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  // Enable Draft Mode
  const draft = await draftMode();
  draft.enable();

  // Redirect to the requested slug (or homepage)
  redirect(slug);
}
