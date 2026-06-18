import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { WelcomeProvider } from "./Context/welcome";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WelcomeProvider>
      <App />
    </WelcomeProvider>
  </StrictMode>
);