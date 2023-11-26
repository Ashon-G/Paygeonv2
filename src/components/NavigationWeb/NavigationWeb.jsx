/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonsIconOutline } from "../ButtonsIconOutline";
import { ButtonsLabelIcon } from "../ButtonsLabelIcon";
import "./style.css";
import MagicBell, { FloatingNotificationInbox } from "@magicbell/magicbell-react";

const theme = {
  header: {
    fontFamily: 'inherit',
    backgroundColor: '#FFFFFF',
    textColor: '#5225C1',
    fontSize: '15px',
    borderRadius: '10px',
  },
  // ... other theme configurations
};

export const NavigationWeb = ({
  className,
  lineClassName,
  line = "https://cdn.animaapp.com/projects/6396ae03e56413451aeaf9fe/releases/656080f5a33634abc4123b99/img/line.svg",
  buttonsLabelIconButtonsLabelIconClassName,
  buttonsIconOutlineButtonsIconOutlineClassName,
}) => {
  return (
    <div className={`navigation-web ${className}`}>
      <img className={`line ${lineClassName}`} alt="Line" src={line} />
      <ButtonsLabelIcon
        className={buttonsLabelIconButtonsLabelIconClassName}
        linkClassName="buttons-label-icon-transparent-resting-onlight"
        text="English"
        text1=""
      />
      <MagicBell
        apiKey="b8b27eda9fc333e25eefe20f6f11cdae6ee2c46c"
        userEmail="vashon@kaped.io"
        theme={theme}
        locale="en"
      >
        {(props) => <FloatingNotificationInbox width={400} height={500} {...props} />}
      </MagicBell>

      <ButtonsIconOutline
        className={buttonsIconOutlineButtonsIconOutlineClassName}
        iconClassName="buttons-icon-outline-resting-onlight"
        text=""
      />
      <div className="links">
        <div className="div">Privacy Policy</div>
        <div className="div">License</div>
        <div className="div">API</div>
        <div className="div">Help Center</div>
        <p className="element-all-rights-re">© 2022 All rights reserved</p>
      </div>
    </div>
  );
};

NavigationWeb.propTypes = {
  line: PropTypes.string,
};
