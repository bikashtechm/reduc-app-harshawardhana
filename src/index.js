import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

// State
let defaultState = 0;

// Reducers
const balanceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + 100;

    case "WITHDRAW":
      return state - 100;

    default:
      return state;
  }
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
