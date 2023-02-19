import React from "react";

import logo from "../assets/dotStory.svg";
import "./Loading.scss";

export const Loading = ({ loadingValue }) => {
  return (
    <div className="loading__wrapper">
      <div className="loading__wrapper-logo">
        <img src={logo} alt="dotStory" />
      </div>
      <div className="loading__wrapper-footer">
        <div className="loading__wrapper-footerTitle">
          <h3>Loading...</h3>
          <h3>{loadingValue}%</h3>
        </div>
        <div className="progress">
          <progress
            id="progress_bar"
            value={loadingValue}
            min={0}
            max={100}
          ></progress>
          <hr />
        </div>
      </div>
    </div>
  );
};
