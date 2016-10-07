import React from 'react';

const NoteIndexItem = ({noteDetails}) => {
  return(
    <ul className='index-item'>
      <li className='index-title'>{noteDetails.title.slice(0,25) + '...'}</li>
      <li className='index-contents'>{noteDetails.body.slice(0,50) + '...'}</li>
      <li>From notebook: {noteDetails.notebook_id}</li>
    </ul>
  );
}

export default NoteIndexItem;
