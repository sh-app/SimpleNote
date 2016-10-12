import React from 'react';

export default class NotebookCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let notebook = this.state;
    this.props.create({notebook});
    this.props.closeModal();
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }
  render() {
    return (
      <form className = 'create-modal' onSubmit={this.handleSubmit}>
        <h2>Create a Notebook</h2>
        <br></br>
        <input
          className='title-form'
          type='text'
          onChange={this.handleChange('title')}
          placeholder='Notebook title'
          value={this.state.title}
        />
      <textarea
        placeholder='Notebook description'
        onChange={this.handleChange('description')}
        value={this.state.description}
      />
    <button>CREATE A NOTEBOOK</button>
    <button className='warning' onClick={this.props.closeModal}>CANCEL</button>
    </form>
    );
  }
}
