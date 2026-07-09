import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import "./styles/theme.css";
import "./styles/buttons.css";
import "./styles/cards.css";
import "./styles/sections.css";
import "./styles/animations.css";
import "./styles/utilities.css";

import "./styles/theme.css";
import "./styles/index.css";
import "./styles/globals.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);