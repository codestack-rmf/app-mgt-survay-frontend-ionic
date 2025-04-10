import React from 'react';
import './BackgroundSvg.css';

const BackgroundSvg: React.FC = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        backgroundColor: 'black'
      }}
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 440 956"
      fill="none"
    >
      <defs>
        <filter
          id="filter0_f_629_2676"
          x="-1046.64"
          y="-337.638"
          width="2446.27"
          height="1669.54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="121.819" result="effect1_foregroundBlur_629_2676" />
        </filter>
        <clipPath id="paint0_angular_629_2676_clip_path">
          <path d="M100.772 23.0892C243.142 -132.839 403.728 -122.669 738.044 -7.4175C1020.35 89.9043 1109.77 215.697 1148.2 453.587C1177.95 637.709 1119.67 755.475 1021.51 914.065C744.585 1361.48 7.25409 775.993 -324.052 1023.66C-329.425 1027.67 -332.111 1029.68 -334.53 1031.09C-336.948 1032.5 -338.768 1033.29 -342.407 1034.89C-521.949 1113.44 -691.898 898.37 -780.946 652.126C-871.614 401.403 -668.714 28.6076 -428.028 -7.41764C-187.342 -43.4429 -265.683 424.445 100.772 23.0892Z" />
        </clipPath>
      </defs>
      <g filter="url(#filter0_f_629_2676)">
        <g clipPath="url(#paint0_angular_629_2676_clip_path)">
          <g transform="matrix(0.204656 0.121819 -0.302305 0.229606 229.797 270.963)">
            <foreignObject
              x="-5500.47"
              y="-5500.47"
              width="11000.9"
              height="11000.9"
            >
              <div
                
                style={{
                  background: `conic-gradient(
                    from 90deg,
                    rgba(105, 144, 249, 1) 0deg,
                    rgba(98, 132, 255, 1) 30.4565deg,
                    rgba(255, 113, 181, 1) 51.4213deg,
                    rgba(249, 229, 232, 1) 94.698deg,
                    rgba(151, 225, 211, 1) 169.159deg,
                    rgba(105, 144, 249, 1) 360deg
                  )`,
                  width: '100%',
                  height: '100%',
                  opacity: 0.3
                }}
              ></div>
            </foreignObject>
          </g>
        </g>
      </g>
    </svg>
    </div>
  );
};

export default BackgroundSvg;