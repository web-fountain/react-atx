import React from 'react';


export default function WhatWeUse({ stroke = 'var(--text-primary' }) {
  return (
    <svg
      width="110"
      height="110"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61.9703 66.2585C51.343 72.3941 40.9633 76.469 32.8158 78.1362C28.7313 78.9721 25.3214 79.1789 22.7677 78.8091C20.1856 78.4351 18.829 77.5356 18.2312 76.5001C17.6334 75.4647 17.5327 73.8401 18.4998 71.4169C19.4564 69.0204 21.3405 66.1708 24.1066 63.0514C29.6242 56.8291 38.343 49.8774 48.9703 43.7418C59.5975 37.6062 69.9772 33.5313 78.1247 31.8641C82.2092 31.0282 85.6191 30.8213 88.1728 31.1912C90.7549 31.5652 92.1116 32.4647 92.7094 33.5001C93.3072 34.5356 93.4079 36.1602 92.4407 38.5834C91.4842 40.9799 89.6 43.8295 86.8339 46.9489C81.3163 53.1712 72.5975 60.1228 61.9703 66.2585Z"
        stroke={stroke}
        strokeWidth="4"
      />
      <path
        d="M48.9711 66.2585C59.5984 72.3941 69.9781 76.469 78.1256 78.1362C82.2101 78.9721 85.62 79.1789 88.1737 78.8091C90.7558 78.4351 92.1124 77.5356 92.7102 76.5001C93.308 75.4647 93.4087 73.8401 92.4416 71.4169C91.485 69.0204 89.6009 66.1708 86.8348 63.0514C81.3172 56.8291 72.5984 49.8774 61.9711 43.7418C51.3439 37.6062 40.9642 33.5313 32.8167 31.8641C28.7322 31.0282 25.3223 30.8213 22.7686 31.1912C20.1865 31.5652 18.8299 32.4647 18.2321 33.5001C17.6342 34.5356 17.5335 36.1602 18.5007 38.5834C19.4572 40.9799 21.3414 43.8295 24.1075 46.9489C29.6251 53.1712 38.3439 60.1228 48.9711 66.2585Z"
        stroke={stroke}
        strokeWidth="4"
      />
      <path
        d="M68.4727 55C68.4727 67.2713 66.8117 78.2978 64.1819 86.1873C62.8635 90.1426 61.3377 93.1991 59.7405 95.2257C58.1256 97.2749 56.6683 98 55.4727 98C54.2771 98 52.8197 97.2749 51.2048 95.2257C49.6076 93.1991 48.0818 90.1426 46.7634 86.1873C44.1336 78.2978 42.4727 67.2713 42.4727 55C42.4727 42.7287 44.1336 31.7022 46.7634 23.8127C48.0818 19.8574 49.6076 16.8009 51.2048 14.7743C52.8197 12.7251 54.2771 12 55.4727 12C56.6683 12 58.1256 12.7251 59.7405 14.7743C61.3377 16.8009 62.8635 19.8574 64.1819 23.8127C66.8117 31.7022 68.4727 42.7287 68.4727 55Z"
        stroke={stroke}
        strokeWidth="4"
      />
      <circle cx="55.9727" cy="54.5" r="5.5" stroke={stroke} strokeWidth="4" />
      <circle cx="75.4727" cy="21" r="4" fill={stroke} />
      <circle cx="22.9727" cy="56.5" r="1.5" fill={stroke} />
      <circle cx="72.9727" cy="85.5" r="1.5" fill={stroke} />
      <circle cx="73.9727" cy="91.5" r="2.5" fill={stroke} />
      <circle cx="87.9727" cy="17.5" r="2.5" fill={stroke} />
      <circle cx="15.9727" cy="49.5" r="2.5" fill={stroke} />
    </svg>
  );
}