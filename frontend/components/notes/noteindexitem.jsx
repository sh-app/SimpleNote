import React from 'react';

export default class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.receiveNote(this.props.note);
  }

  render() {
    return(
      <ul className='index-item' onClick={this.handleClick.bind(this)}>
        <li className='index-title'>{this.props.note.title.slice(0,25) + '...'}</li>
        <li className='index-contents'>{$(this.props.note.body).text().slice(0,50) + '...'}</li>
        <li>From notebook: {this.props.note.notebook_id}</li>
      </ul>
    );
  }
}
