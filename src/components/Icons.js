import React from "react";

export const RollDiceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="#3399ff"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="3" width="18" height="18" rx="3" ry="3" stroke="#3399ff" fill="none" strokeWidth="2" />
    <circle cx="9" cy="9" r="1.5" fill="#3399ff" />
    <circle cx="15" cy="15" r="1.5" fill="#3399ff" />
  </svg>
);

export const HoldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="#3399ff"
    viewBox="0 0 24 24"
  >
    <path d="M8 2C6.9 2 6 2.9 6 4v8H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2c0 0 1.5-1.25 1.5-1.25S7 21 8 21h8c1 0 1.5 1.25 1.5 1.25H20c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1h-3V4c0-1.1-.9-2-2-2H8z"/>
  </svg>
);

export const NewGameIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="#3399ff"
    viewBox="0 0 24 24"
  >
    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.66-.67 3.16-1.76 4.24l1.42 1.42C19.07 16.07 20 14.15 20 12c0-4.41-3.59-8-8-8zM4 12c0 2.15.93 4.07 2.34 5.66l1.42-1.42C6.67 15.16 6 13.66 6 12c0-3.31 2.69-6 6-6v3l4-4-4-4v3c-4.41 0-8 3.59-8 8z"/>
  </svg>
);

const Icons = { RollDiceIcon, HoldIcon, NewGameIcon };
export default Icons;
