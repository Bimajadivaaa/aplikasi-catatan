import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({ item }) => {
  return (
    <div>
      {item && item.map((note) => <NotesItem key={note.id} {...note} />)}
    </div>
  );
};
export default NotesList;
