import firebase from 'firebase/app'
import firebaseConfig from '../configs/firebaseConfig'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
