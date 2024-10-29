import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import ResetStyles from "./styles/reset.styles.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ResetStyles />
    <App />
  </StrictMode>
);
