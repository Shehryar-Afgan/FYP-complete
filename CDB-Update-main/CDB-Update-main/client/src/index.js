import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContextProvider } from "./components/SocketContext/Context";
import DataProvider from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </ContextProvider>
);

reportWebVitals();
