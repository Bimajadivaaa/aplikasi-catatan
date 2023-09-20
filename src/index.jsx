import React from "react";
import { createRoot } from "react-dom/client";
import NotesApp from "./components/NotesComponents/NotesApp";
import "../src/assets/Styles/styles.css"

const root = createRoot(document.getElementById("root"));
root.render(<NotesApp/>);
