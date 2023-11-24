import React from "react";
import { ButtonsIconOutline } from "../../components/ButtonsIconOutline";
import { Group } from "../../components/Group";
import { NavigationWeb } from "../../components/NavigationWeb";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="overlap">
        <NavigationWeb
          buttonsIconOutlineButtonsIconOutlineClassName="design-component-instance-node"
          buttonsLabelIconButtonsLabelIconClassName="navigation-web-footer-onlight-instance"
          className="navigation-web-footer-onlight"
          line="https://cdn.animaapp.com/projects/6396ae03e56413451aeaf9fe/releases/656080f5a33634abc4123b99/img/line-1.svg"
          lineClassName="navigation-web-instance"
        />
        <div className="navigation-web-top">
          <div className="overlap-group">
            <div className="img" />
            <ButtonsIconOutline
              className="buttons-icon-outline-instance"
              iconClassName="buttons-icon-outline-resting-onlight-instance"
              text=""
            />
            <div className="search">
              <div className="search-icon"></div>
              <input className="type-to-search" />
            </div>
            <div className="text-wrapper-2">Title</div>
          </div>
        </div>
        <Group className="group-1" />
      </div>
    </div>
  );
};
