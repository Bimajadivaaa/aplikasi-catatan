import React from "react";
import NotesList from "./NotesList";
import { listData } from "../NotesData/dataNotes";

const NotesApp = () => {
  const notes = listData();
  return (
    <div>
      <h1>Daftar Catatan</h1>
      <NotesList item={notes} />
    </div>
  );
};

export default NotesApp;
