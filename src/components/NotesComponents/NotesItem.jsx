import React from "react";
import NotesItemBody from "./NotesItemBody";
import NotesDeleteButton from "./NotesDeletesButton";
import NotesArchiveButton from "./NotesArchiveButton";
import NotesUnarchiveButton from "./NotesUnarchiveButton";
import { showFormattedDate } from "../NotesData/dataNotes";

const NotesItem = ({
  title,
  body,
  createdAt,
  id,
  onDelete,
  onArchive,
  onUnarchive,
  isArchive,
}) => {
  return (
    <div className="notes_items">
      <NotesItemBody title={title} body={body} createdAt={createdAt} />
      <p className="notes_items__tangal">
        Dibuat pada tanggal : {showFormattedDate(createdAt)}
      </p>
      <NotesArchiveButton id={id} onArchive={onArchive} isArchive={isArchive} />
      <NotesDeleteButton id={id} onDelete={onDelete} />
      <NotesUnarchiveButton
        id={id}
        onUnarchive={onUnarchive}
        isArchive={isArchive}
      />
    </div>
  );
};
export default NotesItem;
