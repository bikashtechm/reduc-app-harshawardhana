import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));

// State
let defaultState = 0;

// Action Type

const DEPOSIT = "DEPOSIT";
const WITHDRAW = "WITHDRAW";

// Action Creators
const depositAction = (amount) => {
  return {
    type: DEPOSIT,
    payload: {
      amount: amount,
    },
  };
};

const withdrawAction = (amount) => {
  return {
    type: WITHDRAW,
    payload: {
      amount: amount,
    },
  };
};

// Reducers
const balanceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload.amount;

    case WITHDRAW:
      return state - action.payload.amount;

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
store.dispatch(depositAction(100));
store.dispatch(depositAction(500));
store.dispatch(depositAction(300));
store.dispatch(withdrawAction(100));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
