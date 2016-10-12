import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const sessionInfo = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(sessionInfo);
  } else {
    store = configureStore();
  }

  window.store = store; //testing only
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
