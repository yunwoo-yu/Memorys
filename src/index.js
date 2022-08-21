import React from "react";

import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import { worker } from "./mocks/worker";
if (process.env.NODE_ENV === "development") {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
