import React, { useState } from 'react';

interface GimsLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showText?: boolean;
  variant?: 'image' | 'vector' | 'badge';
  lightText?: boolean;
}

export const GimsLogo: React.FC<GimsLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
  variant = 'auto',
  lightText = false,
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    custom: '',
  };

  const selectedSizeClass = sizeClasses[size] || sizeClasses.md;

  // Render SVG Vector of the official GIMS Gambat Logo
  const renderVectorLogo = () => (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full object-contain filter drop-shadow-xs"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Official GIMS Gambat Logo"
    >
      <defs>
        {/* Arc for "INSTITUTE OF MEDICAL SCIENCES" */}
        <path
          id="gims-outer-arc"
          d="M 30 115 A 72 72 0 1 1 170 115"
          fill="none"
        />
        {/* Arc for "PIR ABDUL QADIR SHAH JEELANI" */}
        <path
          id="gims-inner-crescent-arc"
          d="M 54 116 A 50 50 0 0 0 146 116"
          fill="none"
        />
      </defs>

      {/* White circle backing for high contrast on dark backgrounds */}
      <circle cx="100" cy="85" r="76" fill="#FFFFFF" />

      {/* Outer green ring */}
      <circle
        cx="100"
        cy="85"
        r="72"
        stroke="#00843D"
        strokeWidth="2"
        fill="none"
      />

      {/* Text on upper circle: INSTITUTE OF MEDICAL SCIENCES */}
      <text
        fill="#00843D"
        fontSize="9.8"
        fontWeight="800"
        letterSpacing="1.2"
        fontFamily="sans-serif"
      >
        <textPath href="#gims-outer-arc" startOffset="50%" textAnchor="middle">
          INSTITUTE OF MEDICAL SCIENCES
        </textPath>
      </text>

      {/* Deep Green Crescent Moon in Lower Half */}
      <path
        d="M 36 68 C 35 116 70 148 100 148 C 130 148 165 116 164 68 C 160 120 128 135 100 135 C 72 135 40 120 36 68 Z"
        fill="#00843D"
      />

      {/* Text inside the Crescent: PIR ABDUL QADIR SHAH JEELANI */}
      <text
        fill="#FFFFFF"
        fontSize="7.2"
        fontWeight="700"
        letterSpacing="0.8"
        fontFamily="sans-serif"
      >
        <textPath href="#gims-inner-crescent-arc" startOffset="50%" textAnchor="middle">
          PIR ABDUL QADIR SHAH JEELANI
        </textPath>
      </text>

      {/* Caduceus / Rod of Asclepius with Wings in the Center */}
      <g id="gims-caduceus" transform="translate(100, 68)">
        {/* Top round finial */}
        <circle cx="0" cy="-35" r="3.5" fill="#00843D" />

        {/* Central Rod / Staff */}
        <path
          d="M -1.8 -32 L 1.8 -32 L 1.2 38 L -1.2 38 Z"
          fill="#00843D"
        />

        {/* Detailed Horizontal Wings */}
        <g fill="#00843D">
          {/* Left Wing */}
          <path d="M -2 -33 C -10 -37 -24 -36 -32 -28 C -26 -28 -18 -26 -14 -22 C -24 -24 -30 -18 -32 -13 C -25 -15 -16 -14 -12 -10 C -18 -10 -24 -7 -25 -2 C -18 -5 -10 -5 -2 -14 Z" />
          {/* Right Wing */}
          <path d="M 2 -33 C 10 -37 24 -36 32 -28 C 26 -28 18 -26 14 -22 C 24 -24 30 -18 32 -13 C 25 -15 16 -14 12 -10 C 18 -10 24 -7 25 -2 C 18 -5 10 -5 2 -14 Z" />
        </g>

        {/* Coiled Serpent wrapping around staff */}
        <path
          d="M 6 -26 C 2 -27 -6 -24 -6 -18 C -6 -12 6 -11 6 -4 C 6 2 -6 4 -6 11 C -6 17 6 18 6 25 C 6 30 1 34 0 36"
          stroke="#00843D"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Serpent Head */}
        <circle cx="6" cy="-26" r="2.2" fill="#00843D" />
      </g>

      {/* GAMBAT Text at the Bottom */}
      <text
        x="100"
        y="180"
        textAnchor="middle"
        fill="#00843D"
        fontSize="22"
        fontWeight="900"
        fontFamily="sans-serif"
        letterSpacing="1.5"
      >
        GAMBAT
      </text>
    </svg>
  );

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`relative shrink-0 ${selectedSizeClass} flex items-center justify-center`}>
        {!imgError ? (
          <img
            src={`${import.meta.env.BASE_URL}logo1.png`}
            alt="GIMS Gambat Official Emblem"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          renderVectorLogo()
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-black tracking-wider leading-tight font-['Playfair_Display',serif] ${
              lightText ? 'text-white' : 'text-slate-900'
            }`}
          >
            GIMS GAMBAT
          </span>
          <span
            className={`text-[9px] font-semibold tracking-widest uppercase ${
              lightText ? 'text-teal-400' : 'text-teal-700'
            }`}
          >
            Pir Abdul Qadir Shah Jeelani Institute
          </span>
        </div>
      )}
    </div>
  );
};
