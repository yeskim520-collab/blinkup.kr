import React, { useState } from 'react';

export const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero-section" className="w-full bg-black overflow-hidden select-none">
      {/* Full-width Edge-to-Edge Hero Image matching frog editorial layout */}
      <div className="w-full overflow-hidden bg-black aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9] max-h-[620px] relative select-none">
        {!imageError ? (
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=85"
            alt="BlinkUp 팀 전략 및 크리에이티브 협업"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center block"
          />
        ) : (
          /* High-fidelity Vector Fallback matching the uploaded photo composition */
          <svg
            viewBox="0 0 800 500"
            className="w-full h-full object-cover block"
            aria-label="팀 협업과 디지털 오버레이 그래픽"
          >
            <defs>
              <linearGradient id="heroDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>

              <linearGradient id="overlayGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#818cf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0.3" />
              </linearGradient>

              <filter id="glowPoints" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <rect width="800" height="500" fill="url(#heroDarkGrad)" />

            {/* Ambient Studio Lighting background shapes */}
            <circle cx="200" cy="180" r="160" fill="#38bdf8" opacity="0.15" />
            <circle cx="600" cy="220" r="180" fill="#f43f5e" opacity="0.12" />

            {/* Left Silhouette (Person 1 - Terracotta / Short hair) */}
            <path
              d="M 50 500 Q 80 340 140 280 Q 180 230 230 250 Q 270 320 290 500 Z"
              fill="#c2410c"
              opacity="0.85"
            />
            {/* Center Silhouette (Person 2 - Dark navy shirt, leaning forward) */}
            <path
              d="M 260 500 Q 290 220 370 150 Q 420 110 470 160 Q 520 240 540 500 Z"
              fill="#1e293b"
            />
            {/* Right Silhouette (Person 3 - Light blue shirt, blonde hair) */}
            <path
              d="M 490 500 Q 520 250 600 185 Q 660 140 710 200 Q 750 300 780 500 Z"
              fill="#38bdf8"
              opacity="0.8"
            />

            {/* Center Document / Strategy Sheet on Desk */}
            <polygon points="340,390 480,310 560,370 420,450" fill="#ffffff" opacity="0.9" />

            {/* Futuristic Point-cloud / Network constellation overlay */}
            <g stroke="#ffffff" strokeWidth="0.8" opacity="0.75" filter="url(#glowPoints)">
              <line x1="380" y1="310" x2="420" y2="280" />
              <line x1="420" y1="280" x2="460" y2="300" />
              <line x1="460" y1="300" x2="500" y2="270" />
              <line x1="420" y1="280" x2="440" y2="240" />
              <line x1="360" y1="270" x2="380" y2="310" />
              <line x1="480" y1="330" x2="520" y2="300" />
            </g>

            {/* Glowing Data Nodes */}
            <g fill="#ffffff" filter="url(#glowPoints)">
              <circle cx="380" cy="310" r="3" />
              <circle cx="420" cy="280" r="3.5" />
              <circle cx="460" cy="300" r="3" />
              <circle cx="500" cy="270" r="3" />
              <circle cx="440" cy="240" r="4" fill="#38bdf8" />
              <circle cx="360" cy="270" r="2.5" />
              <circle cx="480" cy="330" r="3" />
              <circle cx="520" cy="300" r="2.5" />
            </g>

            {/* City Light Reflection Overlay Lines on Left & Right */}
            <g stroke="#38bdf8" strokeWidth="1" opacity="0.3" strokeDasharray="4,6">
              <line x1="40" y1="100" x2="40" y2="400" />
              <line x1="60" y1="80" x2="60" y2="350" />
              <line x1="740" y1="120" x2="740" y2="430" />
              <line x1="760" y1="90" x2="760" y2="380" />
            </g>

            <rect width="800" height="500" fill="url(#overlayGlow)" />
          </svg>
        )}
      </div>
    </section>
  );
};
