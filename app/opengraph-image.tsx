import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Zlendo Realty — Free 3D Home Design & Floor Planning';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #0a1628 0%, #0f2b3c 40%, #0d3b3a 70%, #0a2e2d 100%)',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Decorative circles */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-120px',
                        right: '-80px',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0,155,141,0.15) 0%, transparent 70%)',
                        display: 'flex',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-100px',
                        left: '-60px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(242,101,34,0.12) 0%, transparent 70%)',
                        display: 'flex',
                    }}
                />

                {/* Grid pattern overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        display: 'flex',
                    }}
                />

                {/* Top accent line */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #009B8D, #F26522, #009B8D)',
                        display: 'flex',
                    }}
                />

                {/* Main content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        position: 'relative',
                        zIndex: 10,
                    }}
                >
                    {/* Logo icon - house shape */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            marginBottom: '8px',
                        }}
                    >
                        {/* House icon */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '72px',
                                height: '72px',
                                borderRadius: '20px',
                                background: 'linear-gradient(135deg, #009B8D, #00b8a9)',
                                boxShadow: '0 8px 32px rgba(0,155,141,0.4)',
                            }}
                        >
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                <path d="M3 9.5L12 3L21 9.5V20C21 20.5 20.5 21 20 21H4C3.5 21 3 20.5 3 20V9.5Z" fill="white" opacity="0.9" />
                                <path d="M9 21V13H15V21" stroke="rgba(0,155,141,0.6)" strokeWidth="1.5" />
                            </svg>
                        </div>
                    </div>

                    {/* Brand name */}
                    <div
                        style={{
                            display: 'flex',
                            fontSize: '64px',
                            fontWeight: 800,
                            letterSpacing: '-1px',
                            lineHeight: 1,
                        }}
                    >
                        <span style={{ color: '#009B8D' }}>Zlendo</span>
                        <span style={{ color: 'white', marginLeft: '14px' }}>Realty</span>
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: '22px',
                            color: 'rgba(255,255,255,0.6)',
                            letterSpacing: '4px',
                            textTransform: 'uppercase',
                            fontWeight: 500,
                            display: 'flex',
                        }}
                    >
                        Design · Visualize · Realize
                    </div>

                    {/* Divider */}
                    <div
                        style={{
                            width: '80px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #009B8D, #F26522)',
                            borderRadius: '4px',
                            marginTop: '12px',
                            marginBottom: '12px',
                            display: 'flex',
                        }}
                    />

                    {/* Description */}
                    <div
                        style={{
                            fontSize: '26px',
                            color: 'rgba(255,255,255,0.85)',
                            fontWeight: 400,
                            textAlign: 'center',
                            maxWidth: '700px',
                            lineHeight: 1.4,
                            display: 'flex',
                        }}
                    >
                        Free 3D Home Design & Floor Planning Software
                    </div>

                    {/* CTA Button */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginTop: '24px',
                            padding: '16px 40px',
                            borderRadius: '50px',
                            background: 'linear-gradient(135deg, #F26522, #e85d1a)',
                            color: 'white',
                            fontSize: '22px',
                            fontWeight: 700,
                            boxShadow: '0 8px 32px rgba(242,101,34,0.4)',
                            letterSpacing: '0.5px',
                        }}
                    >
                        Start Designing for Free →
                    </div>
                </div>

                {/* Bottom URL bar */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '16px',
                        color: 'rgba(255,255,255,0.4)',
                        fontWeight: 400,
                    }}
                >
                    zlendorealty.com
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
