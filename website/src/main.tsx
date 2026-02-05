import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MasterProvider from "./providers/MasterProvider.tsx";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.css'
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MasterProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MasterProvider>
    </StrictMode>,
);
