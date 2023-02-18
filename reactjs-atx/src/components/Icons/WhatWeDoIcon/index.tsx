import React from "react"

export default function WhatWeDo({ stroke = "var(--text-primary" }) {
  return (
    <svg
      width="110"
      height="110"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.5 13.5L3.86066 54.6345C2.65305 56.1564 4.10555 58.3327 5.97432 57.8014L51 45M36.5 13.5L51 45M36.5 13.5L73.3731 8.16311C74.0717 8.06199 74.7719 8.33665 75.2155 8.8858L105.227 46.0432C105.701 46.63 105.805 47.4336 105.495 48.1214L85.9069 91.5968C85.6505 92.1659 85.1431 92.5827 84.5349 92.7236L47.2595 101.361C45.9136 101.672 44.6644 100.558 44.8209 99.1856L51 45M36.5 13.5L27.5 39.5M51 45L39.9093 39.6957C39.6398 39.5669 39.345 39.5 39.0463 39.5H27.5M27.5 39.5L4.75306 54.6813C3.721 55.3701 3.55869 56.8227 4.41327 57.7223L46 101.5"
        // stroke="#ECECEC"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M26.5 40.5L73 9"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M27.5 40L34 88"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36.5 14L70.883 25.1512C72.175 25.5703 73.5 24.6071 73.5 23.2488V9"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M73.5 25.5L105.5 47.5"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 45.5L73 26.5"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M105 48L37 91.5"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M86 60.5L73.5 24L77.5 65.5L86 92.5V60.5Z"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 44L85.5 60.5L77.5 65L28 40"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M45.5 101L105.5 48"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M39 92H85"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}
