import React from 'react';
import './HeaderList.css'; // Archivo de estilos separado

const HeaderList: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="-31" y="-143" width="440" height="956" rx="50" fill="none" />
    <g clipPath="url(#clip0_121_409)">
      
      <g filter="url(#filter1_d_121_409)">
        <g>
          <g>
            <circle cx="17.5" cy="25.5" r="3.5" fill="#D9D9D9" />
            <path d="M54 26.5C54.5523 26.5 55 26.0523 55 25.5C55 24.9477 54.5523 24.5 54 24.5V26.5ZM26 26.5H54V24.5H26V26.5Z" fill="white" />
          </g>
          <g>
            <circle cx="17.5" cy="35.5" r="3.5" fill="#D9D9D9" />
            <path d="M54 36.5C54.5523 36.5 55 36.0523 55 35.5C55 34.9477 54.5523 34.5 54 34.5V36.5ZM26 36.5H54V34.5H26V36.5Z" fill="white" />
          </g>
          <g>
            <circle cx="17.5" cy="45.5" r="3.5" fill="#D9D9D9" />
            <path d="M54 46.5C54.5523 46.5 55 46.0523 55 45.5C55 44.9477 54.5523 44.5 54 44.5V46.5ZM26 46.5H54V44.5H26V46.5Z" fill="white" />
          </g>
        </g>
      </g>
      <path
        d="M32.25 2.74241C34.5705 1.40267 37.4295 1.40267 39.75 2.74241L62.9269 16.1236C65.2474 17.4634 66.6769 19.9393 66.6769 22.6188V49.3812C66.6769 52.0607 65.2474 54.5366 62.9269 55.8764L39.75 69.2576C37.4295 70.5973 34.5705 70.5973 32.25 69.2576L9.07308 55.8764C6.75258 54.5366 5.32309 52.0607 5.32309 49.3812V22.6188C5.32309 19.9393 6.75258 17.4634 9.07309 16.1236L32.25 2.74241Z"
        fill="#D9D9D9"
        fillOpacity="0.14"
        stroke="white"
      />
    </g>
    <defs>
      <filter id="filter1_d_121_409" x="10" y="22" width="49" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_121_409" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_121_409" result="shape" />
      </filter>
      <clipPath id="clip0_121_409">
        <rect x="-31" y="-143" width="440" height="956" rx="50" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default HeaderList;