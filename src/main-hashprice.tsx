import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HashpriceWidget from "./widget/hashprice.tsx";

ReactDOM.createRoot(document.getElementById("hashprice-widget")!).render(
  <React.StrictMode>
    <HashpriceWidget />
  </React.StrictMode>
);
