import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({children}) => (
  <div>
    <header className='group'>
      <h1 className='header-title'>SIMPLENOTE</h1>
      <HeaderContainer />
    </header>
    {children}
  </div>
);

export default App;
