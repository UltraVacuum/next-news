import React from "react";

import "./style/empty-news.scss";

export default function EmptyNews() {
  return (
    <div className="container">
      <div className="empty-wrap">
        <div className="no-data" />
        <p className="text-error">Not Enough Data.</p>
      </div>
    </div>
  );
}
