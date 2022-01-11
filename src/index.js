import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import rootReducer from './store/reducers/rootReducer'
import firebase from './config/fbconfig'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore';
import {composeWithDevTools} from 'redux-devtools-extension'
import { saveState, loadState } from './store/reducers/localStorage';


const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase}))))

store.subscribe(() => {
  saveState(store.getState());
});


const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(

    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
,
  document.getElementById('root')
);
