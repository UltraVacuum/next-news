import React from "react";
import ReactDOM from "react-dom";

import HomePage from "./pages/home";

import Store from "@/store";
import { Provider } from "react-redux";

import "@/sass/bootstrap/index.scss";
import "@/sass/app/index.scss";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={Store}>
    <HomePage />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
