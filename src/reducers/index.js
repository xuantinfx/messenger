import {combineReducers} from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { Auth} from './auth'

export default combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: Auth
});