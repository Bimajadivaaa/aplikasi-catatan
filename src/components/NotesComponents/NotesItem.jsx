import React from "react";
import NotesItemBody from "./NotesItemBody";
import NotesDeleteButton from "./NotesDeletesButton";
import NotesArchiveButton from "./NotesArchiveButton";

const NotesItem = ({ title, body, createdAt, id, onDelete, onArchive }) => {
  return (
    <div className="notes_items">
      <NotesItemBody
        title={title}
        body={body}
        createdAt={createdAt}
      />
      <NotesDeleteButton id={id} onDelete={onDelete} />
      <NotesArchiveButton id={id} onArchive={onArchive}/>
    </div>
  );
};
export default NotesItem;