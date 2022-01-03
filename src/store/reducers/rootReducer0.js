import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import NoteReducer from './NoteReducer0'

const rootReducer = combineReducers({
    note: NoteReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
  })

export default rootReducer