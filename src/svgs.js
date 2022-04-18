import React from "react";

export const LightIcon = () => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 12.2222C16.5978 12.2222 12.2222 16.5978 12.2222 22C12.2222 27.4022 16.5978 31.7778 22 31.7778C27.4022 31.7778 31.7778 27.4022 31.7778 22C31.7778 16.5978 27.4022 12.2222 22 12.2222ZM6.72222 23.8333C7.72444 23.8333 8.55556 23.0022 8.55556 22C8.55556 20.9978 7.72444 20.1667 6.72222 20.1667H1.83333C0.831111 20.1667 0 20.9978 0 22C0 23.0022 0.831111 23.8333 1.83333 23.8333H6.72222ZM42.1667 23.8333C43.1689 23.8333 44 23.0022 44 22C44 20.9978 43.1689 20.1667 42.1667 20.1667H37.2778C36.2756 20.1667 35.4444 20.9978 35.4444 22C35.4444 23.0022 36.2756 23.8333 37.2778 23.8333H42.1667ZM20.1667 6.72222C20.1667 7.72444 20.9978 8.55556 22 8.55556C23.0022 8.55556 23.8333 7.72444 23.8333 6.72222V1.83333C23.8333 0.831111 23.0022 0 22 0C20.9978 0 20.1667 0.831111 20.1667 1.83333V6.72222ZM31.5089 9.9C30.8 10.6089 30.8 11.7822 31.5089 12.4911C32.2178 13.2 33.3911 13.2 34.1 12.4911L36.6911 9.9C37.4 9.19111 37.4 8.01778 36.6911 7.30889C35.9822 6.6 34.8089 6.6 34.1 7.30889L31.5089 9.9ZM7.30889 34.1C6.6 34.8089 6.6 35.9822 7.30889 36.6911C8.01778 37.4 9.19111 37.4 9.9 36.6911L12.4911 34.1C13.2 33.3911 13.2 32.2178 12.4911 31.5089C11.7822 30.8 10.6089 30.8 9.9 31.5089L7.30889 34.1ZM9.9 12.4911C10.6089 13.2 11.7822 13.2 12.4911 12.4911C13.2 11.7822 13.2 10.6089 12.4911 9.9L9.9 7.30889C9.19111 6.6 8.01778 6.6 7.30889 7.30889C6.6 8.01778 6.6 9.19111 7.30889 9.9L9.9 12.4911ZM34.1 36.6911C34.8089 37.4 35.9822 37.4 36.6911 36.6911C37.4 35.9822 37.4 34.8089 36.6911 34.1L34.1 31.5089C33.3911 30.8 32.2178 30.8 31.5089 31.5089C30.8 32.2178 30.8 33.3911 31.5089 34.1L34.1 36.6911ZM20.1667 42.1667C20.1667 43.1689 20.9978 44 22 44C23.0022 44 23.8333 43.1689 23.8333 42.1667V37.2778C23.8333 36.2756 23.0022 35.4444 22 35.4444C20.9978 35.4444 20.1667 36.2756 20.1667 37.2778V42.1667Z"
        fill="#EE7267"
      />
    </svg>
  );
};

export const DarkIcon = () => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 6C13.1543 6 6 13.1543 6 22C6 30.8457 13.1543 38 22 38C30.8457 38 38 30.8457 38 22C38 21.1771 37.9314 20.3543 37.8171 19.5771C36.08 22 33.2229 23.6 30 23.6C24.6971 23.6 20.4 19.3029 20.4 14C20.4 10.7771 22 7.92 24.4229 6.18286C23.6457 6.06857 22.8229 6 22 6Z" fill="#CAC6FF" />
    </svg>
  );
};

export const HamburgerIcon = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="hamburger-icon" d="M2 5 12 5 12 11 2 11Q-2 8 2 5M12 5 24 5 24 11 12 11M24 5 36 5 36 11 24 11M36 5 46 5Q50 8 46 11L36 11M2 21 12 21 12 27 2 27Q-2 24 2 21M12 21 24 21 24 27 12 27M24 21 36 21 36 27 24 27M36 21 46 21Q50 24 46 27L36 27M2 37 12 37 12 43 2 43Q-2 40 2 37M12 37 24 37 24 43 12 43M24 37 36 37 36 43 24 43M36 37 46 37Q50 40 46 43L36 43" fill="inherit" />
    </svg>
  );
};

export const Circle =(props)=>{
  return (
    <svg id={props.id} className="blackhole" width="256" height="256" viewBox="-5 -5 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 30A1 1 0 0060 30 1 1 0 000 30Z" fill="white" />
      {/* <circle cx="24" cy="24" r="24" fill="white" /> */}
    </svg>
  );
}