import React from 'react';


export default function OurGoal({ stroke = 'var(--text-primary' }) {
  return (
    <svg
      width="110"
      height="110"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M85 27.5V5.77485C85 4.40974 86.3384 3.44246 87.6455 3.83589C90.2913 4.63221 93.5568 5.5 95 5.5C96.4055 5.5 98.2226 5.00614 99.5835 4.53901C100.263 4.30594 101 4.79862 101 5.51654V14.8132C101 15.227 100.747 15.6002 100.353 15.7291C97.9508 16.5167 93.5496 17.3211 91 15.5"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="18" cy="95.5" r="6" stroke={stroke} strokeWidth="4" />
      <circle cx="18" cy="62.5" r="5" stroke={stroke} strokeWidth="4" />
      <circle cx="53" cy="44.5" r="5" stroke={stroke} strokeWidth="4" />
      <path
        d="M90.5 33C90.5 35.2767 88.2628 37.5 85 37.5C81.7372 37.5 79.5 35.2767 79.5 33C79.5 30.7233 81.7372 28.5 85 28.5C88.2628 28.5 90.5 30.7233 90.5 33Z"
        stroke={stroke}
        strokeWidth="3"
      />
      <circle cx="83" cy="83.5" r="5" stroke={stroke} strokeWidth="4" />
      <path
        d="M18 89.5V68"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M76.5 82L23 64"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M80 79L56 48.5"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M58 42.5L79.5 35"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M22 91L82.5 37"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
      <path
        d="M84.5 78.5L85 38"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
      <path
        d="M22 59.5L47.5 47"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
      <path
        d="M24 96L78.5 86.5"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
    </svg>
  );
}
