import React from 'react';
import TagItem from './tag_item';
import NoteContainer from '../notes/note_container';

export default class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllTags();
  }

  render() {
    this.tags = this.props.allTags.map(tag =>
      <TagItem
        tag={tag}
        receiveTag={this.props.receiveTag}
        key={tag.id} />
    );

      return(
        <div>

          <div className='mini-menu'>
            <h2>Tags</h2>
            <ul className='note-index'>{this.tags}</ul>
          </div>
          <NoteContainer/>
        </div>
      );
  }

}
