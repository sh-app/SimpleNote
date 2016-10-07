import React from 'react';
import ReactQuill from 'react-quill';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: "", notebook_id: 1};
    this.handleChange = this.handleChange.bind(this);
    this._autosave = this._autosave.bind(this);
  }


  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  _autosave(content, delta) {
    this.setState({body: content});
    let changes = delta;
    let note = this.state;
    note.title = note.title || "Untitled";
    if (this.props.note) {
      setInterval(this.props.save({note}), 5000);
    } else {
      if (note.body.length > 10) {
        setInterval(this.props.create({note}), 5000);
      }
    }
  }
  render() {

    return(
      <div className='note-container group'>
        <button>SAVE</button>

        <input
          type='text'
          placeholder='Title...'
          onChange ={this.handleChange('title')}
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
