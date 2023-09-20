import React from "react";
import NotesItemBody from "./NotesItemBody";
import NotesDeleteButton from "./NotesDeletesButton";

const NotesItem = ({ title, description, id, onDelete }) => {
  return (
    <div className="notes_items">
      <NotesItemBody title={title} description={description} />
      <NotesDeleteButton id={id} onDelete={onDelete} />
    </div>
  );
};
export default NotesItem;
