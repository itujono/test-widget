/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const widgets = document.querySelectorAll(".luxor-hi-widget");

widgets.forEach((widget) => {
  ReactDOM.createRoot(widget).render(
    <React.StrictMode>
      <App widget={widget.dataset.widget} />
    </React.StrictMode>
  );
});

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
