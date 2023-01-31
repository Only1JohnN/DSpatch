import React from "react";

const CheckIcon = ({ color }) => (
  <svg width='10' height='9' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 5.27185L1.61054 3.58766L3.49745 5.32305L8.68323 0.444336L10 2.14879L3.45216 8.22211L0 5.27185Z'
      fill={color || "#5941a9"}
    />
  </svg>
);

export default CheckIcon;
