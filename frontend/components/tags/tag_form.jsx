import React from 'react';

export default class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._save = this._save.bind(this);
  }

  componentDidUpdate() {
    this.tagNames = [];
    if (this.props.noteTags) {
      this.tagNames = this.props.noteTags.map( (tag) => {
        return tag.name;
      });
    }
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  _save() {
    let note = this.props.note;
    note.title = note.title || "Untitled";

    if (this.props.note.id) {
      this.props.save({note});
    } else {
      this.props.create({note});
    }

  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.tagNames.includes(this.state.name)) {
      this.setState({name: ""});

    } else {
      let tag = this.state;
      this._save();
      tag.note_id = this.props.note.id;
      this.props.createTag({tag});
      this.setState({name: ""});
    }
  }

  render() {
    return (
      <div className='tags-control'>
        <h3>#</h3>
        <form  className='group' onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Add tags'
            onChange={this.handleChange('name')}
            value={this.state.name} />
            <button>+</button>
        </form>
      </div>
    );
  }
}
