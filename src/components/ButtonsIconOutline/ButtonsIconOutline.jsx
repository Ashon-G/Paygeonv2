/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonsIconOutline = ({ className, iconClassName, text = "" }) => {
  return (
    <div className={`buttons-icon-outline ${className}`}>
      <div className={`text-wrapper ${iconClassName}`}>{text}</div>
    </div>
  );
};

ButtonsIconOutline.propTypes = {
  text: PropTypes.string,
};
