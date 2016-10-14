import React from 'react';
import ReactQuill from 'react-quill';
import NotebookDropdown from '../notebooks/notebook_dropdown';
import TagForm from '../tags/tag_form';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      id: null,
      notebook_id: null
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this._autosave = this._autosave.bind(this);
    this._save = this._save.bind(this);
  }

  componentWillMount() {
    this.props.getAllNotebooks();
    this.props.getAllTags();
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.currentNote);
  }

  handleSave() {
    this._save(true);
  }

  handleDelete() {
    this.props.deleteNote(this.state.id);
    this.props.getNotebook(this.state.notebook_id);
  }

  handleTitle(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  _autosave(content, delta, source, editor) {
    this.setState({body: content});

    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.timeOut = setTimeout(this._save, 2000);
  }

  _save(userCreate=false) {
    let note = this.state;
    note.title = note.title || "Untitled";
    note.notebook_id = note.notebook_id || this.props.currentNotebook.id;
    if (this.props.currentNote.id) {
      this.props.save({note});
      this.props.getNotebook(note.notebook_id);
    } else if ((note.body.length > 20 && note.notebook_id) || userCreate) {
      this.props.create({note});
      this.props.getNotebook(note.notebook_id);
    }
  }

  render() {
    const displayProp = this.state.id ? {display: ''} : {display: 'none'};
    this.tagNames = [];
    if (this.state.tags && this.state.tags.length > 0) {
      this.tagNames = this.state.tags.map( (tag) => {
        return tag.name;
      });
    }
    this.formattedTagNames = this.tagNames.join(', ');

    return(
      <div className='note-container'>

        <div className='note-control-panel group'>
          <button id='save' onClick={this.handleSave}>SAVE</button>
          <button
            id= 'delete'
            className= 'warning'
            onClick={this.handleDelete}
            style={displayProp}>DELETE
          </button>
          <NotebookDropdown
            notebooks={this.props.allNotebooks}
            currentNotebook={this.props.currentNotebook}
            notebookSelected={this.state.notebook_id}
            getNotebook={this.props.getNotebook}
            setNotebookId={this.props.setNotebookId}
            createNotebook={this.props.createNotebook}
            receiveTag={this.props.receiveTag}/>
          <TagForm
            note = {this.state}
            allTags ={this.props.allTags}
            noteTags ={this.state.tags}
            save ={this.props.save}
            create ={this.props.create}
            createTag={this.props.createTag}
            receiveTag={this.props.receiveTag}
            getNote={this.props.getNote}
            removeTag={this.props.removeTag} />
        </div>
        <div className='note-attr group'>
          <p className='tags'><strong>#: </strong> {this.formattedTagNames || "No tags added"}</p>
          <p className='update' style={displayProp}>Last Updated: {this.state.updated_at} ago</p>
        </div>
        <input
          className='title-form'
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
