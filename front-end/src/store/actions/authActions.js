export const startLoadingUser = () => (dispatch) => {
  dispatch({ type: 'START_LOADING_USER' })
}

export const logIn = credentials => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()
  firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' })
    })
    .catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err })
    })
}

export const logOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase()
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: 'LOGOUT_SUCCESS' })
    })
}

export const createUser = newUser => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase()
  const firestore = getFirestore()
  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(resp => firestore
      .collection('users')
      .doc(resp.user.uid)
      .set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
        email: newUser.email,
        createdAt: new Date(),
      }))
    .then(() => {
      dispatch({ type: 'CREATE_USER_SUCCESS' })
    })
    .catch((err) => {
      dispatch({ type: 'CREATE_USER_ERROR', err })
    })
}
