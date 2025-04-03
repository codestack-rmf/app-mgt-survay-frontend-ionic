import React from 'react';

const HeaderPhilosophy: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M32.25 2.74241C34.5705 1.40267 37.4295 1.40267 39.75 2.74241L62.9269 16.1236C65.2474 17.4634 66.6769 19.9393 66.6769 22.6188V49.3812C66.6769 52.0607 65.2474 54.5366 62.9269 55.8764L39.75 69.2576C37.4295 70.5973 34.5705 70.5973 32.25 69.2576L9.07308 55.8764C6.75258 54.5366 5.32309 52.0607 5.32309 49.3812V22.6188C5.32309 19.9393 6.75258 17.4634 9.07309 16.1236L32.25 2.74241Z" fill="#D9D9D9" fill-opacity="0.14" stroke="white"/>
    <g filter="url(#filter0_d_629_2400)">
      <path d="M12 38C19.3333 29.5 38.8 17.6 58 38C50.8333 44.5001 31.6 53.6002 12 38Z" stroke="white" stroke-width="2"/>
      <circle cx="35.6852" cy="37.3193" r="8.11391" stroke="white" stroke-width="3"/>
      <circle cx="37.8216" cy="37.8524" r="3.0399" stroke="white" stroke-width="3"/>
    </g>
    <defs>
      <filter id="filter0_d_629_2400" x="6.56299" y="25.736" width="56.8633" height="29.8776" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_629_2400"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_629_2400" result="shape"/>
      </filter>
    </defs>
  </svg>
);

export default HeaderPhilosophy;