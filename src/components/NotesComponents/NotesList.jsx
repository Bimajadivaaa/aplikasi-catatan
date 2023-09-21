import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({ item, onDelete, onArchive }) => {
  return (
    <div>
      {item &&
        item.map((note) => (
          <NotesItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
    </div>
  );
};
export default NotesList;
