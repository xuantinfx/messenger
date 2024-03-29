import {combineReducers} from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import auth from './auth'
import message from './message'
import user from './user';

export default combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth,
    message,
    user
});