import React from "react";

// import Router from "react-router";

import "./index.scss";

function queryCategory(category) {
  // const oldQuery = Router.query;
  // Router.push({
  //   pathname: "/",
  //   query: {
  //     ...oldQuery,
  //     category
  //   }
  // });
}

export default function CategoryNav() {
  const categories =
    "business entertainment general health science sports technology";
  return (
    <nav className="nav sidebar">
      {categories.split(" ").map((item, index) => {
        return (
          <span
            className="nav-link"
            onClick={() => queryCategory(item)}
            key={index}
          >
            {item}
          </span>
        );
      })}
    </nav>
  );
}
