import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NetworkHashrateWidget from "./widget/network-hashrate.tsx";

ReactDOM.createRoot(document.getElementById("network-hashrate-widget")!).render(
  <React.StrictMode>
    <NetworkHashrateWidget />
  </React.StrictMode>
);
