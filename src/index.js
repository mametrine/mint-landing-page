import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

// Parcel automatically detects the "react" module.
