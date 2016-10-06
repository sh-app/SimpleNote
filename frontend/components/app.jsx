import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({children}) => (
  <div>
    <header>
      <div className='header-nav group'>
      <img className='header-logo' src={window.mediaAssets.logo} />
      <h1 className='header-title'>SIMPLENOTE</h1>
      <HeaderContainer />
      </div>
    </header>
    {children}
  </div>
);

export default App;
