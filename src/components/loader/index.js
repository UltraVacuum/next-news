import React from "react";
import classNames from "classnames";

import "./style/loaders.scss";

export const LineScale = ({ style, className, children }) => {
  return (
    <div className={classNames("loader", className)} style={style}>
      <div className="wrap">
        <div className="line-scale">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        {children}
      </div>
    </div>
  );
};

export const LineScalePulseOut = ({ style, className }) => (
  <div className={classNames("loader", className)} style={style}>
    <div className="line-scale-pulse-out">
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
