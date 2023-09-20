import React from "react";
import NotesItemBody from "./NotesItemBody";

const NotesItem = ({title, description}) => {
    return (
        <div>
            <NotesItemBody title={title} description={description}/>
        </div>
    )
}
export default NotesItem;