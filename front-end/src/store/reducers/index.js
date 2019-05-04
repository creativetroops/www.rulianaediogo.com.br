import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer'
import giftReducer from './giftReducer'
import instagramReducer from './instagramReducer'

import duckModal from '../ducks/modal'
import duckMessage from '../ducks/message'
import duckRsvp from '../ducks/rsvp'

const rootReducer = combineReducers({
  auth: authReducer,
  gifts: giftReducer,
  instagrams: instagramReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,

  rsvp: duckRsvp,
  modal: duckModal,
  message: duckMessage,
})

export default rootReducer
