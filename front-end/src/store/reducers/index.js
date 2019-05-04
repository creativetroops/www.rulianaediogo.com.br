import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer'
import rsvpReducer from './rsvpReducer'
import giftReducer from './giftReducer'
import contactReducer from './contactReducer'
import instagramReducer from './instagramReducer'

import duckModal from '../ducks/modal'
import duckMessage from '../ducks/message'

const rootReducer = combineReducers({
  auth: authReducer,
  rsvps: rsvpReducer,
  gifts: giftReducer,
  contacts: contactReducer,
  instagrams: instagramReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  modal: duckModal,
  message: duckMessage,
})

export default rootReducer
