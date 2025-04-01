import React from 'react';

const Deck: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="39" viewBox="0 0 24 39" fill="none">
    <rect x="1" y="11" width="22" height="27" rx="2" stroke="#596AE3" stroke-width="2"/>
    <rect x="1" y="6" width="22" height="27" rx="2" stroke="#596AE3" stroke-width="2"/>
    <rect x="1" y="1" width="22" height="27" rx="2" fill="#E6ECFF" stroke="#596AE3" stroke-width="2"/>
  </svg>
);

export default Deck;