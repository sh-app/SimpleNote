import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SplashPage from './splashpage/splashpage';
import SessionFormContainer from './session/sessionform_container';


const Root = ({store}) => {

  const _redirectIfLoggedIn = (next, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  }

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path='/' component={App}>
          <IndexRoute component={SplashPage} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
