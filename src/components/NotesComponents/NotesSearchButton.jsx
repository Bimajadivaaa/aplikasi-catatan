import React from "react";

class NotesSearchButton extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="notes-search"
          placeholder="Cari catatan disini..."
          value={this.props.keyword}
          onChange={this.props.onKeywordChange}
        />
      </div>
    );
  }
}

export default NotesSearchButton;
