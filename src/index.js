import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
