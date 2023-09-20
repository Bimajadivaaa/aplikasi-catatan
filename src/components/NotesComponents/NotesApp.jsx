import React from "react";
import NotesList from "./NotesList";
import { listData } from "../NotesData/dataNotes";
import "../../assets/Styles/styles.css"

const NotesApp = () => {
  const notes = listData();
  return (
    <div className="notes_app">
      <h1>Daftar Catatan</h1>
      <NotesList item={notes} />
    </div>
  );
};

export default NotesApp;
