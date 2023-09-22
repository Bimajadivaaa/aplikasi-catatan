import React from "react";

const NotesUnarchiveButton = ({ id, onUnarchive ,isArchive}) => {
  return (
    <button
      className="notes_items__unArchiveButton"
      onClick={() => onUnarchive(id)}
      hidden={!isArchive}
    >
      Pindahkan
    </button>
  );
};

export default NotesUnarchiveButton;
