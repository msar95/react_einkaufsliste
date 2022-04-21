import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";

const entryPoint = document.getElementById("entryPoint");

const root = ReactDOM.createRoot(entryPoint);

root.render(<App />)