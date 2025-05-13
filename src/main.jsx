import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Lenis from "lenis";
import App from "./App.jsx";

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
