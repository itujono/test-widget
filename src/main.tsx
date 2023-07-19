/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const widgets = document.querySelectorAll(".luxor-hi-widget");

widgets.forEach((div) => {
  const root = ReactDOM.createRoot(div);
  root.render(
    <React.StrictMode>
      <App symbol={div.dataset.symbol} />
    </React.StrictMode>
  );
});
