import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import TaskReducer from './TaskReducer'
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    task: TaskReducer,
    auth: authReducer,
    user: userReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
  })

export default rootReducer