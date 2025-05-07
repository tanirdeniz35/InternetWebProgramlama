import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App2 from "./App2.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);
