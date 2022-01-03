import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer0'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {
  ReactReduxFirebaseProvider,
  getFirebase,
} from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore} from 'redux-firestore'
import firebase from './config/fbconfig'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import fbconfig from './config/fbconfig'

const initialState = {}


const store = createStore(rootReducer,
    applyMiddleware(thunk.withExtraArgument({getFirebase}))
);

const rrfProps = {
  firebase,
  config: fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
