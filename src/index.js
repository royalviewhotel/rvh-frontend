import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RoomProvider from "./context/RoomContext";

import "./i18n";
import { BrowserRouter } from "react-router-dom/dist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RoomProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </RoomProvider>
);
