import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

import './../assets/css/argon.css';

import './../assets/vendor/nucleo/css/nucleo.css';

import './../assets/img/portraits/elmar.png';

const store = configureStore();

render(
  <App />,

  document.getElementById("app")
);


