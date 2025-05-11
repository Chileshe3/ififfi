import React from 'react';

const Logo = () => {
  return (
    <div className="logo">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle with gradient */}
        <circle
          cx="60"
          cy="60"
          r="58"
          stroke="url(#outerGradient)"
          strokeWidth="2"
          className="logo-circle"
        />
        
        {/* Inner geometric shape */}
        <path
          d="M40 45h40v30H40z"
          fill="url(#innerGradient)"
          className="logo-shape"
        />
        
        {/* Text */}
        <text
          x="60"
          y="65"
          textAnchor="middle"
          className="logo-text"
          fill="url(#textGradient)"
          fontSize="24"
          fontWeight="bold"
        >
          FN
        </text>

        {/* Gradients definitions */}
        <defs>
          <linearGradient id="outerGradient" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#61dafb" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          
          <linearGradient id="innerGradient" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(97, 218, 251, 0.1)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
          </linearGradient>

          <linearGradient id="textGradient" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#61dafb" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
