import React from "react";

const NotesArchiveButton = ({ id, onArchive }) => {
  return (
    <button className="notes_items__archiveButton" onClick={() => onArchive(id)}>
      Arsip
    </button>
  );
};

export default NotesArchiveButton;
