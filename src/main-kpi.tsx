import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import KPIWidget from "./widget/kpi.tsx";

ReactDOM.createRoot(document.getElementById("kpi-widget")!).render(
  <React.StrictMode>
    <KPIWidget />
  </React.StrictMode>
);
