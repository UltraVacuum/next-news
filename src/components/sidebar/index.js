import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { changeCategory } from "@/store";

import "./index.scss";

function CategoryNav({ category, dispatch }) {
  const categories =
    "business entertainment general health science sports technology";
  return (
    <nav className="nav sidebar">
      {categories.split(" ").map((item, index) => {
        return (
          <span
            className={classNames("nav-link", { active: item === category })}
            onClick={() => dispatch(changeCategory(item))}
            key={index}
          >
            {item}
          </span>
        );
      })}
    </nav>
  );
}

const mapState = state => ({ category: state.category });

export default connect(mapState)(CategoryNav);
