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
      archiveNotes: [],
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
    this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this);
    this.onUnarchiveNotesHandler = this.onUnarchiveNotesHandler.bind(this);
  }
  onArchiveNotesHandler(id) {
    const { notes, archiveNotes } = this.state;
    const noteToArchive = notes.find((item) => item.id === id);

    if (noteToArchive) {
      const updateNotes = notes.filter((item) => item.id !== id);
      this.setState({
        notes: updateNotes,
        archiveNotes: [...archiveNotes, noteToArchive],
      });
    }
  }

  onUnarchiveNotesHandler(id) {
    const { notes, archiveNotes } = this.state;
    const noteToUnarchive = archiveNotes.find((item) => item.id === id);

    if (noteToUnarchive) {
      const updatedArchiveNotes = archiveNotes.filter((item) => item.id !== id);
      this.setState({
        archiveNotes: updatedArchiveNotes,
        notes: [...notes, noteToUnarchive],
      });
    }
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: Date.now(),
        },
      ],
    }));
  }

  onDeleteNotesHandler(id, isArchived = false) {
    if (isArchived) {
      const filteredAchivedNotes = this.state.archiveNotes.filter(
        (item) => item.id !== id
      );
      this.setState({ archiveNotes: filteredAchivedNotes });
    } else {
      const filteredNotes = this.state.notes.filter((item) => item.id !== id);
      this.setState({ notes: filteredNotes });
    }
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
    return filterNotes;
  }

  render() {
    const filteredNotes = this.searchNotes();
    const noSearchResult = filteredNotes.length === 0;

    return (
      <div className="notes_app">
        <h1>Tambah Catatan</h1>
        <NotesInput addNotes={this.onAddNotesHandler} />
        {this.conditionNotesIsEmpty() ? (
          <p className="notes-list__empty-message">
            Tidak ada catatan tersedia
          </p>
        ) : (
          <>
            <h1>Daftar Catatan</h1>
            <NotesSearchButton
              keyword={this.state.keyword}
              onKeywordChange={(event) =>
                this.setState({ keyword: event.target.value })
              }
            />
            {noSearchResult && !this.conditionNotesIsEmpty() && (
              <p>Mohon maaf kata kunci tidak ada dalam pencarian.</p>
            )}
            <NotesList
              item={filteredNotes}
              onDelete={this.onDeleteNotesHandler}
              onArchive={this.onArchiveNotesHandler}
              isArchive={false}
            />
          </>
        )}
        {this.state.archiveNotes.length > 0 && (
          <>
            <h1>Arsip</h1>
            <NotesList
              item={this.state.archiveNotes}
              onDelete={(id) => this.onDeleteNotesHandler(id, true)}
              onUnarchive={this.onUnarchiveNotesHandler}
              isArchive={true}
            />
          </>
        )}
        {this.state.archiveNotes.length === 0 && (
          <p className="notes-list__empty-message">Tidak ada arsip tersedia</p>
        )}
      </div>
    );
  }
}

export default NotesApp;
