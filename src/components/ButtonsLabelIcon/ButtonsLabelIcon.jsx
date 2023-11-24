/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonsLabelIcon = ({ className, linkClassName, text = "Lable", text1 = "" }) => {
  return (
    <div className={`buttons-label-icon ${className}`}>
      <div className={`link ${linkClassName}`}>
        <div className="lable">{text}</div>
        <div className="icon">{text1}</div>
      </div>
    </div>
  );
};

ButtonsLabelIcon.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
