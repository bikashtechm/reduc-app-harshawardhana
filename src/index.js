import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));

// State
let defaultState = 0;

// Reducers
const balanceReducer = (state = defaultState, action) => {
  console.log("Reducer Called...");
  switch (action.type) {
    case "DEPOSIT":
      return state + 100;

    case "WITHDRAW":
      return state - 100;

    default:
      return state;
  }
};

// Store
const store = configureStore({
  reducer: balanceReducer,
});

store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch
store.dispatch({
  type: "DEPOSIT",
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
