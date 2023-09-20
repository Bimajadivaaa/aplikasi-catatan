import React from "react";
import NotesList from "./NotesList";
import { listData } from "../NotesData/dataNotes";
import "../Styles/styles.css";
import NotesInput from "./NotesInput";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: listData(),
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
  }

  // isEmptyValidation = () => {
  //   const {title, description} = this.state;
  //   let error = '';
  //   let formIsValid = true;
  //   if (!title || !description){
  //     formIsValid = false;
  //     error = "Input tidak boleh Kosong!"
  //   }
  //   this.setState({error: error})
  //   return formIsValid;
  // }

  onAddNotesHandler({ title, description }) {
    this.setState((previouState) => {
      return {
        notes: [
          ...previouState.notes,
          {
            id: +new Date(),
            title,
            description,
          },
        ],
      };
    });
  }

  onDeleteNotesHandler(id) {
    const notes = this.state.notes.filter((item) => item.id != id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className="notes_app">
        <h1>Tambah Catatan</h1>
        <NotesInput addNotes={this.onAddNotesHandler} />
        <h1>Daftar Catatan</h1>
        <NotesList
          item={this.state.notes}
          onDelete={this.onDeleteNotesHandler}
        />
        {/* <span>{this.state.error}</span> */}
      </div>
    );
  }
}

export default NotesApp;
