import * as React from 'react';

const SvgUserIcon = ({ stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      data-name="Path 97"
      d="M17 8a5 5 0 1 1-5-5 5 5 0 0 1 5 5Z"
      fill="none"
      stroke={stroke || 'black'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      data-name="Path 98"
      d="M20 21a8 8 0 1 0-16 0m16 0a8 8 0 1 0-16 0"
      fill="none"
      stroke={stroke || 'black'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path data-name="Path 99" d="M0 0h24v24H0Z" fill="none" />
  </svg>
);
export default SvgUserIcon;
