import React from 'react';
import { hashHistory } from 'react-router';

export default class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.receiveAllNotes(this.props.notebook.notes);
    this.props.receiveNotebook(this.props.notebook);
    hashHistory.push("notebooks/notes");

  }

  render() {
    const description = this.props.notebook.description || "No Description";
    return(
      <ul className='index-item' onClick={this.handleClick.bind(this)}>
        <li className='index-title'>{this.props.notebook.title.slice(0,25) + '...'}</li>
        <li className='index-contents'>{description.slice(0,50) + '...'}</li>
        <li>Last Updated: {this.props.notebook.updated_at}</li>
      </ul>
    );
  }
}
