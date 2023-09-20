import React from "react";
import { createRoot } from "react-dom/client";
import NotesApp from "./components/NotesComponents/NotesApp";
import "./components/Styles/styles.css"

const root = createRoot(document.getElementById("root"));
root.render(<NotesApp/>);
