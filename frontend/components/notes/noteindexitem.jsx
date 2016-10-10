import React from 'react';

export default class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.getNote(this.props.noteDetails.id);
  }

  render() {
    return(
      <ul className='index-item' onClick={this.handleClick.bind(this)}>
        <li className='index-title'>{this.props.noteDetails.title.slice(0,25) + '...'}</li>
        <li className='index-contents'>{$(this.props.noteDetails.body).text().slice(0,50) + '...'}</li>
        <li>From notebook: {this.props.noteDetails.notebook_id}</li>
      </ul>
    );
  }
}
