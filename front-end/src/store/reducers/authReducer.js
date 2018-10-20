const initState = {
	authError: null
}

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'LOGIN_ERROR':
			console.log('login error')
			return {
				...state,
				authError: 'Login failed'
			}
		case 'LOGIN_SUCCESS':
			console.log('login success')
			return {
				...state,
				authError: null
			}
		case 'LOGOUT_SUCCESS':
			console.log('logout success')
			return {
				...state,
				authError: null
			}
		default:
			return state
		case 'CREATE_USER_SUCCESS':
			console.log('create user success')
			return {
				...state,
				authError: null
			}
		case 'CREATE_USER_ERROR':
			console.log('create user error')
			return {
				...state,
				authError: action.err.message
			}
	}
}

export default authReducer