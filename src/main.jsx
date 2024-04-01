import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./fonts/Gumela.ttf";
import "./index.css";
import { ThemeProvider } from "../Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
