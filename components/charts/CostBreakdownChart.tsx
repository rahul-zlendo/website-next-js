
import { useEffect, useState } from 'react';

const CostBreakdownChart = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Simple delay to trigger animation on mount
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" className="w-full h-full">
            <defs>
                <style>
                    {`
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

            .text-main { font-family: 'Nunito', sans-serif; fill: #1A1A1A; }
            .text-sub { font-family: 'Nunito', sans-serif; fill: #4D4D4D; }
            
            /* Animations */
            @keyframes pulseCenter {
              0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(41, 176, 161, 0.4); }
              70% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(41, 176, 161, 0); }
              100% { transform: scale(1); }
            }

            @keyframes ringReveal {
              from { stroke-dasharray: 0 700; opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }

            @keyframes drawLine {
              to { stroke-dashoffset: 0; }
            }

            /* Conditional Animation Classes */
            .animate-ring {
              animation: ringReveal 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }

            .animate-label {
              animation: fadeUp 0.6s ease-out forwards;
            }

            .animate-line {
              stroke-dasharray: 200;
              stroke-dashoffset: 200;
              animation: drawLine 0.8s ease-out forwards;
            }

            /* Segments Transition */
            .ring-segment {
              transition: all 0.3s ease;
              transform-origin: 400px 280px;
              opacity: 0;
            }
            
            /* Delays */
            .delay-100 { animation-delay: 0.1s; }
            .delay-200 { animation-delay: 0.2s; }
            .delay-300 { animation-delay: 0.3s; }
            .delay-400 { animation-delay: 0.4s; }
            .delay-500 { animation-delay: 0.5s; }
            .delay-600 { animation-delay: 0.6s; }
            .delay-700 { animation-delay: 0.7s; }
            .delay-800 { animation-delay: 0.8s; }
            .delay-900 { animation-delay: 0.9s; }
            .delay-1000 { animation-delay: 1.0s; }
            .delay-1100 { animation-delay: 1.1s; }
            .delay-1200 { animation-delay: 1.2s; }

            /* Interactive */
            .segment-group { cursor: pointer; }
            .segment-group:hover .ring-segment { stroke-width: 55; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1)); }
            .segment-group:hover text { fill: #29B0A1; font-weight: 800; }
          `}
                </style>

                <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.1" />
                </filter>
            </defs>

            {/* Title */}
            <text x="400" y="50" className="text-main" fontWeight="900" fontSize="28" textAnchor="middle" letterSpacing="1">CONSTRUCTION COST BREAKDOWN</text>

            {/* Main Chart Group */}
            <g transform="translate(400, 280)">

                {/* Center Info */}
                <g style={{ animation: 'pulseCenter 3s infinite ease-in-out' }}>
                    <circle r="85" fill="white" filter="url(#soft-shadow)" />
                    <text y="8" className="text-main" fontWeight="900" fontSize="32" textAnchor="middle">100%</text>
                    <text y="32" className="text-sub" fontWeight="600" fontSize="14" textAnchor="middle">Transparency</text>
                </g>

                {/* Donut Segments (Rotated -90 to start top) */}
                <g transform="rotate(-90)">
                    {/* Foundation */}
                    <g className="segment-group">
                        <circle
                            r="120" fill="none" stroke="#1e8f82" strokeWidth="45"
                            strokeDasharray="94 534" strokeDashoffset="0"
                            className={`ring-segment ${isVisible ? 'animate-ring delay-200' : ''}`}
                        />
                    </g>

                    {/* Structure */}
                    <g className="segment-group">
                        <circle
                            r="120" fill="none" stroke="#29B0A1" strokeWidth="45"
                            strokeDasharray="138 490" strokeDashoffset="-96"
                            className={`ring-segment ${isVisible ? 'animate-ring delay-400' : ''}`}
                        />
                    </g>

                    {/* Brick */}
                    <g className="segment-group">
                        <circle
                            r="120" fill="none" stroke="#94dcd3" strokeWidth="45"
                            strokeDasharray="113 515" strokeDashoffset="-236"
                            className={`ring-segment ${isVisible ? 'animate-ring delay-600' : ''}`}
                        />
                    </g>

                    {/* Finish */}
                    <g className="segment-group">
                        <circle
                            r="120" fill="none" stroke="#FF603A" strokeWidth="45"
                            strokeDasharray="157 471" strokeDashoffset="-351"
                            className={`ring-segment ${isVisible ? 'animate-ring delay-800' : ''}`}
                        />
                    </g>

                    {/* MEP */}
                    <g className="segment-group">
                        <circle
                            r="120" fill="none" stroke="#1A1A1A" strokeWidth="45"
                            strokeDasharray="75 553" strokeDashoffset="-510"
                            className={`ring-segment ${isVisible ? 'animate-ring delay-1000' : ''}`}
                        />
                    </g>

                    {/* Other */}
                    <g className="segment-group">
                        <circle
                            r="120" fill="none" stroke="#e5e7eb" strokeWidth="45"
                            strokeDasharray="50 578" strokeDashoffset="-587"
                            className={`ring-segment ${isVisible ? 'animate-ring delay-1200' : ''}`}
                        />
                    </g>
                </g>
            </g>

            {/* Labels & Lines */}

            {/* Foundation Label (Top Right) */}
            <g className={`chart-label ${isVisible ? 'animate-label delay-500' : 'opacity-0'}`}>
                <path d="M460 200 L520 160 L680 160" fill="none" stroke="#1A1A1A" strokeWidth="1.5" className={isVisible ? 'animate-line delay-500' : ''} />
                <rect x="520" y="130" width="180" height="50" rx="8" fill="white" filter="url(#soft-shadow)" />
                <rect x="530" y="145" width="12" height="12" rx="3" fill="#1e8f82" />
                <text x="552" y="156" className="text-main" fontWeight="700" fontSize="16">Foundation (15%)</text>
            </g>

            {/* Structure Label (Right) */}
            <g className={`chart-label ${isVisible ? 'animate-label delay-700' : 'opacity-0'}`}>
                <path d="M510 280 L560 280 L680 280" fill="none" stroke="#1A1A1A" strokeWidth="1.5" className={isVisible ? 'animate-line delay-700' : ''} />
                <rect x="560" y="255" width="180" height="50" rx="8" fill="white" filter="url(#soft-shadow)" />
                <rect x="570" y="270" width="12" height="12" rx="3" fill="#29B0A1" />
                <text x="592" y="281" className="text-main" fontWeight="700" fontSize="16">Structure (22%)</text>
            </g>

            {/* Brick Label (Bottom Right) */}
            <g className={`chart-label ${isVisible ? 'animate-label delay-900' : 'opacity-0'}`}>
                <path d="M460 360 L520 400 L680 400" fill="none" stroke="#1A1A1A" strokeWidth="1.5" className={isVisible ? 'animate-line delay-900' : ''} />
                <rect x="520" y="375" width="180" height="50" rx="8" fill="white" filter="url(#soft-shadow)" />
                <rect x="530" y="390" width="12" height="12" rx="3" fill="#94dcd3" />
                <text x="552" y="401" className="text-main" fontWeight="700" fontSize="16">Brickwork (18%)</text>
            </g>

            {/* Finish Label (Bottom Left - Highlight) */}
            <g className={`chart-label ${isVisible ? 'animate-label delay-1100' : 'opacity-0'}`}>
                <path d="M340 360 L280 400 L120 400" fill="none" stroke="#1A1A1A" strokeWidth="1.5" className={isVisible ? 'animate-line delay-1100' : ''} />
                <rect x="100" y="370" width="190" height="60" rx="10" fill="white" stroke="#FF603A" strokeWidth="2" filter="url(#soft-shadow)" />
                <rect x="115" y="390" width="12" height="12" rx="3" fill="#FF603A" />
                <text x="137" y="401" className="text-main" fontWeight="800" fontSize="16">Finishing (25%)</text>
                <text x="137" y="420" className="text-sub" fontSize="11" fontWeight="600">Flooring, Paint, Wood</text>
            </g>

            {/* MEP Label (Left) */}
            <g className={`chart-label ${isVisible ? 'animate-label delay-1300' : 'opacity-0'}`}>
                <path d="M290 280 L240 280 L120 280" fill="none" stroke="#1A1A1A" strokeWidth="1.5" className={isVisible ? 'animate-line delay-1300' : ''} />
                <rect x="60" y="255" width="180" height="50" rx="8" fill="white" filter="url(#soft-shadow)" />
                <rect x="70" y="270" width="12" height="12" rx="3" fill="#1A1A1A" />
                <text x="92" y="281" className="text-main" fontWeight="700" fontSize="16">MEP Services (12%)</text>
            </g>

            {/* Other Label (Top Left) */}
            <g className={`chart-label ${isVisible ? 'animate-label delay-1500' : 'opacity-0'}`}>
                <path d="M340 200 L280 160 L120 160" fill="none" stroke="#1A1A1A" strokeWidth="1.5" className={isVisible ? 'animate-line delay-1500' : ''} />
                <rect x="60" y="130" width="180" height="50" rx="8" fill="white" filter="url(#soft-shadow)" />
                <rect x="70" y="145" width="12" height="12" rx="3" fill="#e5e7eb" />
                <text x="92" y="156" className="text-main" fontWeight="700" fontSize="16">Others (8%)</text>
            </g>

        </svg>
    );
};

export default CostBreakdownChart;
