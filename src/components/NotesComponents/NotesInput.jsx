import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onDescriptionChangeHandler = this.onDescriptionChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  handleValidation = () => {
    const { title, description } = this.state;
    let errors = { title: '', description: ''};

    if (!title) {
     errors.title = 'title is required';
    }

    if (!description) {
      errors.description = 'description is required';
    }
    this.setState({ errors });
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onDescriptionChangeHandler(event) {
    this.setState(() => {
      return {
        description: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {

    const { errors } = this.state;

    return (
      <form className="notes_input" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="Masukkan Judul"
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
        />
        {errors.title != '' && <span style={{color: "red"}}>{this.state.errors.title}</span>}
        <input
          type="text"
          placeholder="Masukkan Deskripsi"
          value={this.state.description}
          onChange={this.onDescriptionChangeHandler}
        />
        {errors.description != '' && <span style={{color: "red"}}>{this.state.errors.description}</span>}
        <button type="submit">Tambah Catatan</button>
      </form>
    );
  }
}
export default NotesInput;
