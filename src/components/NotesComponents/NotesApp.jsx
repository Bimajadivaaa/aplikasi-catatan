import React from "react";
import NotesList from "./NotesList";
import { listData } from "../NotesData/dataNotes";
import "../Styles/styles.css";
import NotesInput from "./NotesInput";
import NotesSearchButton from "./NotesSearchButton";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: listData(),
      keyword: "",
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
        },
      ],
    }));
  }

  onDeleteNotesHandler(id) {
    const filteredNotes = this.state.notes.filter((item) => item.id !== id);
    this.setState({ notes: filteredNotes });
  }

  conditionNotesIsEmpty() {
    return this.state.notes.length === 0;
  }

  searchNotes() {
    const { notes, keyword } = this.state;
    const lowerCaseKeyword = keyword.toLowerCase();
    const filterNotes = notes.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerCaseKeyword) ||
        item.body.toLowerCase().includes(lowerCaseKeyword)
    );
    // if (filterNotes.length === 0){
      
    // }
    return filterNotes;
  }

  render() {
    const filteredNotes = this.searchNotes();
    return (
      <div className="notes_app">
        <h1>Tambah Catatan</h1>
        <NotesInput addNotes={this.onAddNotesHandler} />
        {this.conditionNotesIsEmpty() ? (
          <p className="notes-list__empty-message">Tidak ada catatan tersedia</p>
        ) : (
          <>
            <h1>Daftar Catatan</h1>
            <NotesSearchButton
            keyword={this.state.keyword}
            onKeywordChange={(event)=> this.setState({keyword : event.target.value})}/>
            <NotesList item={filteredNotes} onDelete={this.onDeleteNotesHandler} />
          </>
        )}
      </div>
    );
  }
}

export default NotesApp;
