import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import AddUserReducer from "./store/Reducer/AddEmployee";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Store = configureStore({ reducer: AddUserReducer });
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
