// Action Types
const Types = {
  START_CREATE_USER: 'auth/START_CREATE_USER',
  END_CREATE_USER: 'auth/END_CREATE_USER',
  START_LOGIN_LOGOUT: 'auth/START_LOGIN_LOGOUT',
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT',
}

// Init State
const initState = {
  loading: false,
  message: null,
}

// Reducers
export default function MessageReducer(state = initState, action) {
  switch (action.type) {
    case Types.START_CREATE_USER:
      return {
        ...state,
        loading: true,
        message: action.payload.message,
      }
    case Types.START_LOGIN_LOGOUT:
      return {
        ...state,
        loading: true,
        message: action.payload.message,
      }
    case Types.END_CREATE_USER:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
      }
    case Types.LOGIN:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
      }
    case Types.LOGOUT:
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
      }
    default:
      return { ...state }
  }
}

// Actions
export const Creators = {
  startCreateUser: (message = 'Aguarde, carregando...') => (dispatch) => {
    dispatch({ type: Types.START_CREATE_USER, payload: { message } })
  },

  startLoginLogout: (message = 'Aguarde, carregando...') => (dispatch) => {
    dispatch({ type: Types.START_LOGIN_LOGOUT, payload: { message } })
  },

  login: credentials => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: Types.LOGIN,
          payload: { success: true, message: 'Login efetuado com sucesso!' },
        })
      })
      .catch((err) => {
        dispatch({
          type: Types.LOGIN,
          payload: { success: false, message: 'Houve um erro ao efetuar o login.', debug: err },
        })
      })
  },

  logout: () => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: Types.LOGOUT,
          payload: { success: true, message: 'Até mais!' },
        })
      })
      .catch((err) => {
        dispatch({
          type: Types.LOGOUT,
          payload: { success: false, message: 'Houve um erro ao efetuar o logout.', debug: err },
        })
      })
  },

  createUser: newUser => (dispatch, getState, { getFirebase, getFirestore }) => {
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
        dispatch({
          type: Types.END_CREATE_USER,
          payload: { success: true, message: 'Usuário criado com sucesso!' },
        })
      })
      .catch((err) => {
        dispatch({
          type: Types.END_CREATE_USER,
          payload: { success: false, message: 'Houve um erro ao criar um usuário.', debug: err },
        })
      })
  },
}
