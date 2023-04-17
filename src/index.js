import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/FireBaseContext'
import Context from './store/FireBaseContext'
import firebase from './Firebase/config';
ReactDOM.render(


    <FirebaseContext.Provider value={{firebase}}>
        <Context>
        <App />
        </Context>
    </FirebaseContext.Provider>
    , document.getElementById('root'));
