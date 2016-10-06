import React from 'react';
import ReactQuill from 'react-quill';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.setValue = this.setValue.bind(this);
  }


  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  setValue(content) {
    this.setState({value: content});
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
          value={this.state.value}
          onChange={this.setValue}/>

      </div>
    );
  }
}
