import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./index.css";
import HashpriceWidget from "./widget/hashprice.tsx";

ReactDOM.createRoot(document.getElementById("hashprice-widget")!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <HashpriceWidget />
    </QueryClientProvider>
  </React.StrictMode>
);
