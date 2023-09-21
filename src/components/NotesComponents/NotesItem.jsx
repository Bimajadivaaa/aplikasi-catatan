import React from "react";
import NotesItemBody from "./NotesItemBody";
import NotesDeleteButton from "./NotesDeletesButton";

const NotesItem = ({ title, body, createdAt, archived, id, onDelete }) => {
  return (
    <div className="notes_items">
      <NotesItemBody
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
      />
      <NotesDeleteButton id={id} onDelete={onDelete} />
    </div>
  );
};
export default NotesItem;
