import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { carSalesReducer } from "./reducers/carSalesReducer";

const this_is_a_greate_car_store = createStore(carSalesReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={this_is_a_greate_car_store}>
    <App />
  </Provider>,
  rootElement
);
