import React from "react";
import { render } from "react-dom";
import App from "./App";
import AllReducers from "./reducers/AllReducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(AllReducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
