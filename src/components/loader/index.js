import React from "react";

import "./style/loaders.scss";

export default function Loader() {
  return (
    <div className="loader container">
      <div className="wrap">
        <div className="line-scale">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <p className="text-primary">Loading...</p>
      </div>
    </div>
  );
}
