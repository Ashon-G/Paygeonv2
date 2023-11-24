/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ElementLogoHidden = ({ className }) => {
  return (
    <svg
      className={`element-logo-hidden ${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="black" height="64" rx="32" width="64" />
      <mask
        className="mask"
        height="64"
        id="mask0_0_6923"
        maskUnits="userSpaceOnUse"
        style="mask-type:luminance"
        width="64"
        x="0"
        y="0"
      >
        <rect className="rect" fill="white" height="64" rx="32" width="64" />
      </mask>
      <g className="g" mask="url(#mask0_0_6923)">
        <rect className="rect" fill="#0052FF" height="64" width="64" />
        <rect className="rect" fill="white" height="6" width="10.5" x="18.5" y="14" />
        <path
          className="path"
          d="M22 47V17H34.9051C37.1241 17 39.0657 17.4395 40.7299 18.3184C42.3942 19.1973 43.6886 20.4326 44.6131 22.0244C45.5377 23.6162 46 25.4766 46 27.6055C46 29.7539 45.5255 31.6143 44.5766 33.1865C43.6277 34.7588 42.2993 35.9697 40.5912 36.8193C38.8832 37.6689 36.8905 38.0938 34.6131 38.0938H26.9051V31.7656H32.9781C33.9319 31.7656 34.747 31.5972 35.4234 31.2603C36.0998 30.9233 36.6204 30.4424 36.9854 29.8174C37.3504 29.1924 37.5328 28.4551 37.5328 27.6055C37.5328 26.7461 37.3504 26.0112 36.9854 25.4009C36.6204 24.7905 36.0998 24.3218 35.4234 23.9946C34.747 23.6675 33.9319 23.5039 32.9781 23.5039H30.1168V47H22Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
