import React from 'react';

const HeaderArchetype: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M32.25 2.74241C34.5705 1.40267 37.4295 1.40267 39.75 2.74241L62.9269 16.1236C65.2474 17.4634 66.6769 19.9393 66.6769 22.6188V49.3812C66.6769 52.0607 65.2474 54.5366 62.9269 55.8764L39.75 69.2576C37.4295 70.5973 34.5705 70.5973 32.25 69.2576L9.07308 55.8764C6.75258 54.5366 5.32309 52.0607 5.32309 49.3812V22.6188C5.32309 19.9393 6.75258 17.4634 9.07309 16.1236L32.25 2.74241Z" fill="#D9D9D9" fill-opacity="0.14" stroke="white"/>
    <g filter="url(#filter0_d_629_2281)">
      <circle cx="36.8768" cy="36.0007" r="5.2538" stroke="white" stroke-width="2"/>
      <path d="M46.4191 55.8042H27.0791C27.5797 50.9053 31.7181 47.0834 36.7491 47.0834C41.7801 47.0834 45.9185 50.9053 46.4191 55.8042Z" stroke="white" stroke-width="2"/>
      <path d="M53.5963 41.4888C53.5963 32.1844 46.0536 24.6418 36.7493 24.6418C27.445 24.6418 19.9023 32.1844 19.9023 41.4888" stroke="white" stroke-width="2"/>
      <circle cx="53.5" cy="21.5" r="3.5" fill="white"/>
      <path d="M34.134 15.5L35 14L35.866 15.5H34.134Z" stroke="white" stroke-width="4"/>
      <rect x="17.5519" y="21.1439" width="3.20563" height="3.20563" transform="rotate(26.0521 17.5519 21.1439)" stroke="white" stroke-width="3.20563"/>
    </g>
    <defs>
      <filter id="filter0_d_629_2281" x="10" y="10" width="51" height="54.8042" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_629_2281"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_629_2281" result="shape"/>
      </filter>
    </defs>
  </svg>
);

export default HeaderArchetype;