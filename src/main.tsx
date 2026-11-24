import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FavoritosProvider } from "./context/FavoritosContext";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento raiz não encontrado.");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritosProvider>
        <App />
      </FavoritosProvider>
    </BrowserRouter>
  </StrictMode>,
);
