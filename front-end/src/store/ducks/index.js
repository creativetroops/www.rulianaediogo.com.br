import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

import duckModal from './modal'
import duckMessage from './message'
import duckRsvp from './rsvp'
import duckGift from './gift'
import duckAuth from './auth'

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth: duckAuth,
  rsvp: duckRsvp,
  modal: duckModal,
  message: duckMessage,
  gift: duckGift,
})

export default rootReducer
