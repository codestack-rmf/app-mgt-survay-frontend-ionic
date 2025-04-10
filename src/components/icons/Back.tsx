import React from 'react';

const Back: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="17"
    height="28"
    viewBox="0 0 17 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: 'pointer' }}
  >
    <path d="M16 0.75L1 13.75L16 27.25" stroke="#EDE8F7" />
  </svg>
);

export default Back;