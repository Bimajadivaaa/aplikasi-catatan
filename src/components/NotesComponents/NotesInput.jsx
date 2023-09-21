import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      errors: { title: "", body: "" },
      limitCharacter : 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onDescriptionChangeHandler = this.onDescriptionChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  handleValidation = () => {
    const { title, body } = this.state;
    let errors = { title: "", body: "" };
    if (!title) {
      errors.title = "Judul tidak boleh kosong!";
    }
    if (!body) {
      errors.body = "Catatan tidak boleh kosong!";
    }
    this.setState({ 
      errors: errors,
     });
  };
  

  handleLimitCharacter = (event) => {
    const title = event.target.value;
    const limitCharacterNumber = 50 - title.length;

    if(limitCharacterNumber >= 0 ){
      this.setState({
        title : title,
        limitCharacter : limitCharacterNumber,
      })
    }
  }

  onTitleChangeHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onDescriptionChangeHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.handleValidation();
    if (!this.state.errors.title && !this.state.errors.body) {
      if(this.state.title.trim() !== "" && this.state.body.trim() !== ""){
        this.props.addNotes(this.state);
      }
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <form className="notes_input" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="Masukkan Judul"
          value={this.state.title}
          onChange={this.handleLimitCharacter}
        />
        <p>Sisa karakter : {this.state.limitCharacter}</p>
        {errors.title && <span style={{ color: "red" }}>{errors.title}</span>}
        <textarea
          type="text"
          placeholder="Masukkan Catatanmu disini..."
          value={this.state.body}
          onChange={this.onDescriptionChangeHandler}
        />
        {errors.body && (
          <span style={{ color: "red" }}>{errors.body}</span>
        )}
        <button type="submit">Tambah Catatan</button>
      </form>
    );
  }
}
export default NotesInput;
