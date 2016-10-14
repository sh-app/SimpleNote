import React from 'react';
import { hashHistory } from 'react-router';

export default class TagItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.receiveTag(this.props.tag);
    hashHistory.push("/notes");
  }

  render() {
    return(
      <ul className='index-item' onClick={this.handleClick.bind(this)}>

        <li className='index-title'>#{this.props.tag.name}</li>
        <li className='index-contents'></li>
        <li>Contains {this.props.tag.notes.length || "0"} notes</li>

    </ul>
    );
  }
}
