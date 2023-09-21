import React from "react";

const NotesUnarchiveButton = ({ id, onUnarchive }) => {
  return (
    <button
      className="notes_items__unArchiveButton"
      onClick={() => onUnarchive(id)}
    >
      Pindahkan
    </button>
  );
};

export default NotesUnarchiveButton;
