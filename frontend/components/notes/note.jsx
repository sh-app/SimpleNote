import React from 'react';
import ReactQuill from 'react-quill';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.currentNote.title,
      body: this.props.currentNote.body,
      id: this.props.currentNote.id,
      notebook_id: 1 };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this._autosave = this._autosave.bind(this);
    this._save = this._save.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.currentNote);
  }

  handleSave() {
    if (this.props.currentNote.id) {
      this._save();
    } else {
      this._save(true);
    }
  }

  handleDelete() {
    this.props.deleteNote(this.state.id);
  }

  handleTitle(field) {
      return (e) => this.setState({[field]: e.target.value});
  }

  _autosave(content, delta, source, editor) {
    this.setState({body: content});

    if (this.timeOut) {
      clearTimeout(this.timeOut);
    } else {
      this.timeOut = setTimeout(this._save, 5000);
    }
  }

  _save(userCreate=false) {
    let note = this.state;
    note.title = note.title || "Untitled";
    if (this.props.currentNote.id) {
      this.props.save({note});
    } else if ((note.body && note.body.length > 20) || userCreate) {
      this.props.create({note});
    }

  }

  render() {
    const displayProp = this.state.id ? {display: ''} : {display: 'none'};
    return(
      <div className='note-container group'>
        <button onClick={this.handleSave}>SAVE</button>
        <button
          onClick={this.handleDelete}
          style={displayProp}>DELETE
        </button>
        <p style={displayProp}>Last Updated: {this.state.updated_at}</p>
        <input
          type='text'
          placeholder='Title...'
          onChange ={this.handleTitle('title')}
          value={this.state.title} />

        <ReactQuill
          ref='editor'
          theme='snow'
          value={this.state.body}
          onChange={this._autosave}/>

      </div>
    );
  }
}
