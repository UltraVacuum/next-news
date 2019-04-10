import React, { Component } from "react";
import classNames from "classnames";
import { connect } from "react-redux";

import { CHANGE_CATEGORY } from "./model";

import stickybits from "@/utils/stickybits";

import "./index.scss";

class CategoryNav extends Component {
  componentDidMount() {
    const sideBar = this.refs["sidebar-nav"];
    stickybits(sideBar, { stickyBitStickyOffset: 80 });
  }

  render() {
    const { category, dispatch } = this.props;
    const categories =
      "all business entertainment general health science sports technology";

    return (
      <nav className="nav sidebar" ref="sidebar-nav">
        {categories.split(" ").map((item, index) => {
          return (
            <span
              className={classNames("nav-link", {
                active: item === category
              })}
              onClick={() =>
                dispatch({
                  type: CHANGE_CATEGORY,
                  payload: item
                })
              }
              key={index}
            >
              {item}
            </span>
          );
        })}
      </nav>
    );
  }
}

const mapState = state => ({ category: state.category });

export default connect(mapState)(CategoryNav);
