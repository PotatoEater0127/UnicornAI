import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { Reset as RestCSS } from "styled-reset";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RestCSS />
    <App />
  </StrictMode>
);
