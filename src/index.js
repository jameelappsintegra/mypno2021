import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import FirebaseContext from './components/Firebase/context';
import Firebase from './components/Firebase/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
,
  document.getElementById('root')
);

