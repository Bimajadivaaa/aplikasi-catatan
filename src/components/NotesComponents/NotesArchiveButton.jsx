import React from "react";

const NotesArchiveButton = ({ id, onArchive, isArchive }) => {
  return (
    <button
      className="notes_items__archiveButton"
      onClick={() => onArchive(id)}
      hidden={isArchive}
    >
      Arsip
    </button>
  );
};

export default NotesArchiveButton;
