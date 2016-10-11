import React from 'react';
import { Link } from 'react-router';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className='sidebar'>
        <ul className=''>
          <li><Link to='/notes'>
            <i className="fa fa-pencil-square-o fa-3x" aria-hidden="true"></i>
          </Link></li>
          <li><Link to='/notebooks'>
            <i className="fa fa-book fa-3x" aria-hidden="true"></i>
          </Link></li>
          <li><i className="fa fa-tags fa-3x" aria-hidden="true"></i></li>
        </ul>
      </nav>
  );
  }
}
