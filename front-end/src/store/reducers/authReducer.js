const initState = {
  authError: null,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'START_LOADING_USER':
      console.log('start loading user')
      return {
        ...state,
        loadingUser: true,
      }
    case 'LOGIN_ERROR':
      console.log('login error')
      return {
        ...state,
        loadingUser: false,
        logInMsg: 'Houve um erro ao fazer o login.',
      }
    case 'LOGIN_SUCCESS':
      console.log('login success')
      return {
        ...state,
        loadingUser: false,
        logInMsg: '',
      }
    case 'LOGOUT_SUCCESS':
      console.log('logout success')
      return {
        ...state,
        loadingUser: false,
        logOutMessage: 'Você saiu do sistema.',
      }
    default:
      return state
    case 'CREATE_USER_SUCCESS':
      console.log('create user success')
      return {
        ...state,
        loadingUser: false,
        createUserMsg: 'O usuário foi criado com sucesso!',
      }
    case 'CREATE_USER_ERROR':
      console.log('create user error')
      return {
        ...state,
        loadingUser: false,
        createUserMsg: `Houve um erro ao criar o usuário: ${action.err.message}`,
      }
  }
}

export default authReducer
