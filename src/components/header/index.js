import React, { Component } from "react";
import { connect } from "react-redux";
import { changeLanguage } from "@/store";
// import Router from "react-router";
import Dropdown from "../dropdown";

import { colourOptions } from "./select-options";

class Header extends Component {
  constructor(props) {
    super();
  }

  getDefaultLanguage(language) {
    return (
      colourOptions.filter(item => item.value === language)[0] ||
      colourOptions[2]
    );
  }

  render() {
    const { language, dispatch } = this.props;
    return (
      <header className="main-nav fixed-top">
        <nav className="container navbar navbar-expand">
          <a className="navbar-brand mr-auto" href="/">
            Next News
          </a>
          {/* <ul className="navbar-nav nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              New <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Hot <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Trends <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul> */}
          <Dropdown
            options={colourOptions}
            onChange={({ value }) => dispatch(changeLanguage(value))}
            value={this.getDefaultLanguage(language)}
            placeholder="Language"
          />
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Header);
