import React from "react";

const NotesItemBody = ({ title, description }) => {
  return (
    <div className="notes_items__body">
      <h3 className="notes_items__title">{title}</h3>
      <p className="notes_items__description">{description}</p>
    </div>
  );
};

export default NotesItemBody;
