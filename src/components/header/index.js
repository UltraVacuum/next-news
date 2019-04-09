import React from "react";

// import Router from "react-router";
import Dropdown from "../dropdown";

import { colourOptions } from "./select-options";

function onSelect({ value }) {
  // const oldQuery = Router.query;
  // Router.push({
  //   pathname: "/",
  //   query: {
  //     ...oldQuery,
  //     language: value
  //   }
  // });
}

function Header(language) {
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
          onChange={onSelect}
          value={getDefaultLanguage(language)}
          placeholder="Language"
        />
      </nav>
    </header>
  );
}

function getDefaultLanguage({ language }) {
  return (
    colourOptions.filter(item => item.value === language)[0] || colourOptions[2]
  );
}

Header.defaultOptions = { language: colourOptions[2] };

export default Header;
