import React from "react";

const NotesDeleteButton = ({ id, onDelete }) => {
  return (
    <button className="notes_items__deleteButton" onClick={() => onDelete(id)}>
      Hapus
    </button>
  );
};

export default NotesDeleteButton;
