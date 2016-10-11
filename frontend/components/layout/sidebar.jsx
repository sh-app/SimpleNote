import React from 'react';


export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className='sidebar'>
        <ul className=''>
          <li><i className="fa fa-pencil-square-o fa-3x" aria-hidden="true"></i></li>
          <li><i className="fa fa-book fa-3x" aria-hidden="true"></i></li>
          <li><i className="fa fa-tags fa-3x" aria-hidden="true"></i></li>
        </ul>
      </nav>
  );
  }
}
