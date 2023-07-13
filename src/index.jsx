import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Context
import { MovieProvider } from "./context/movie_context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </React.StrictMode>
);
