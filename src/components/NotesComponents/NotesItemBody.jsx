import React from "react";

const NotesItemBody = ({ title, body, createdAt }) => {
  return (
    <div className="notes_items__body">
      <h3 className="notes_items__title">{title}</h3>
      <h4 className="notes_items__date">{createdAt}</h4>
      <textarea readOnly className="notes_items__textarea">
        {body}
      </textarea>
    </div>
  );
};

export default NotesItemBody;
