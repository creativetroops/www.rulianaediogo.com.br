import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import reducers from './reducers'
import firebase from '../firebase'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore,
      }),
    ),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, {
      userProfile: 'users',
      useFirestoreForProfile: true,
      attachAuthIsReady: true,
    }),
  ),
)

export default store
