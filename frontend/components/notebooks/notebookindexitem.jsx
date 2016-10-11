import React from 'react';

export default class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.receiveNotebook(this.props.notebook);
  }

  render() {
    return(
      <ul className='index-item' onClick={this.handleClick.bind(this)}>
        <li className='index-title'>{this.props.notebook.title.slice(0,25) + '...'}</li>
        <li className='index-contents'>{$(this.props.notebook.description).slice(0,50) + '...'}</li>
        <li>Last Updated: {this.props.notebook.updated_at}</li>
      </ul>
    );
  }
}
