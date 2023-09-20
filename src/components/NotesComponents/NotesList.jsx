import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({ item, onDelete }) => {
  return (
    <div>
      {item &&
        item.map((note) => (
          <NotesItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
        ))}
    </div>
  );
};
export default NotesList;
