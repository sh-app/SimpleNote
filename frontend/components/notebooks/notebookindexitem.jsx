import React from 'react';
import { hashHistory } from 'react-router';

export default class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.receiveNotebook(this.props.notebook);
    hashHistory.push("/notes");
  }

  render() {
    let title;
    let description = this.props.notebook.description || "No Description";

    if (this.props.notebook.title.length > 20) {
      title = this.props.notebook.title.slice(0, 20) + "...";
    } else {
      title = this.props.notebook.title;
    }
    if (description.length > 30) {
      description = description.slice(0,30) + '...';
    }

    return(
      <ul className='index-item' onClick={this.handleClick.bind(this)}>

        <li className='index-title'>{title}</li>
        <li className='index-contents'>{description}</li>
        <li>Contains {this.props.notebook.notes.length || "0"} notes</li>
        <li className='update'><i>
          Last Updated: {this.props.notebook.updated_at} ago
        </i></li>

      </ul>
    );
  }
}
