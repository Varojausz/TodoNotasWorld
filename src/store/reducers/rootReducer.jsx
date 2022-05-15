import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import TaskReducer from './TaskReducer'
import TestReducer from './TestReducer'
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    task: TaskReducer,
    auth: authReducer,
    user: userReducer,
    test: TestReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
  })

export default rootReducer