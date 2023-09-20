import React from "react";
import NotesItemBody from "./NotesItemBody";

const NotesItem = ({title, description}) => {
    return (
        <div className="notes_items">
            <NotesItemBody title={title} description={description}/>
        </div>
    )
}
export default NotesItem;