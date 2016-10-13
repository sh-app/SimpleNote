import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SplashPage from './splashpage/splashpage';
import HomeContainer from './layout/home_container';
import SessionFormContainer from './session/sessionform_container';
import TagContainer from './tags/tag_container';
import NoteIndexContainer from './notes/noteindex_container';
import NotebookIndexContainer from './notebooks/notebookindex_container';


const Root = ({store}) => {

  const _redirectIfLoggedIn = (next, replace) => {
    if (store.getState().session.currentUser) {
      replace('/home');
    }
  }

  const _redirectIfLoggedOut = (next, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/login');
    }
  }

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/" component={App}>
          <IndexRoute component={SplashPage} onEnter={_redirectIfLoggedIn}/>
          <Route path="/home" component={HomeContainer} onEnter={_redirectIfLoggedOut}>
            <IndexRoute component={NoteIndexContainer} />
            <Route path="/notebooks/notes" component={NoteIndexContainer} />  //???
            <Route path="/notebooks" component={NotebookIndexContainer}/>
            <Route path="/tags" component={TagContainer}/>
            <Route path="/notes" component={NoteIndexContainer}/>
          </Route>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
