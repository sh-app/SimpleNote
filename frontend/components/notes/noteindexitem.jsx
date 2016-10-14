import React from 'react';

export default class NoteIndexItem extends React.Component {

  handleClick() {
    this.props.receiveNote(this.props.note);
    this.props.getNotebook(this.props.note.notebook_id);
  }

  render() {
    let title;
    let body;

    if (this.props.note.title.length > 20) {
      title = this.props.note.title.slice(0, 20) + "...";
    } else {
      title = this.props.note.title;
    }
    if ($(this.props.note.body).text().length > 30) {
      body = $(this.props.note.body).text().slice(0,30) + '...';
    } else {
      body = $(this.props.note.body).text();
    }

    return(
      <ul className='index-item' onClick={this.handleClick.bind(this)}>

        <li className='index-title'>{title}</li>
        <li className='index-contents'>{body}</li>
        <li>From notebook: {this.props.note.notebook_title || this.props.currentNotebook.title}</li>
        <li className='update'><i>
          Last Updated: {this.props.note.updated_at } ago
        </i></li>

      </ul>
    );
  }
}
