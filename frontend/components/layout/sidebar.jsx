import React from 'react';


export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className='sidebar'>
        <ul className=''>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </nav>
  );
  }
}
