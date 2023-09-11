import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.styles.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);