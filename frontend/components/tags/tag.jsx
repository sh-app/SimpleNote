import React from 'react';
import TagItem from './tag_item';
import NoteContainer from '../notes/note_container';

export default class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllTags();
  }

  render() {
    this.tags = this.props.allTags.map(tag =>
      <TagItem
        tag={tag}
        key={tag.id} />
    );

    if (this.tags) {
      return(
        <div>

          <div className='mini-menu'>
            <h2>Tags</h2>
            <ul className='note-index'>{this.tags}</ul>
          </div>

          <NoteContainer/>

        </div>
      );
    } else {
      return (<p className='note-loading'>'Loading notebooks...'</p>);
    }
  }
}
