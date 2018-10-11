import authReducer          from './authReducer'
import rsvpReducer          from './rsvpReducer'
import giftReducer          from './giftReducer'
import contactReducer       from './contactReducer'
import { combineReducers }  from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer }  from 'react-redux-firebase'

const rootReducer = combineReducers({
	auth: authReducer,
	rsvps: rsvpReducer,
	gifts: giftReducer,
	contacts: contactReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
});

export default rootReducer