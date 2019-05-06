import api from '../../../services/api'

// Action Types
const Types = {
  START_MESSAGE: 'message/START_MESSAGE',
  END_MESSAGE: 'message/END_MESSAGE',
  RESET_MESSAGE: 'message/RESET_MESSAGE',
}

// Init State
const initState = {
  loading: null,
  message: null,
  success: null,
}

// Reducers
export default function MessageReducer(state = initState, action) {
  switch (action.type) {
    case Types.START_MESSAGE:
      return {
        ...state,
        loading: true,
        message: action.payload.message,
        success: action.payload.success,
      }
    case Types.END_MESSAGE:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        success: action.payload.success,
      }
    case Types.RESET_MESSAGE:
      return {
        ...state,
        loading: null,
        message: null,
        success: null,
      }
    default:
      return { ...state }
  }
}

// Actions
export const Creators = {
  startMessage: (message = 'Aguarde, carregando...') => (dispatch) => {
    dispatch({ type: Types.START_MESSAGE, payload: { message } })
  },
  reset: () => (dispatch) => {
    dispatch({ type: Types.RESET_MESSAGE })
  },
  createMessage: message => (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    const obj = {
      createdAt: new Date(),
      ...message,
    }
    firestore
      .collection('messages')
      .add(obj)
      .then(() => {
        api.endpoints
          .sendMessage(obj)
          .then((res) => {
            const { success } = res.data
            if (success) {
              dispatch({
                type: Types.END_MESSAGE,
                payload: {
                  message: 'Mensagem enviada com sucesso!',
                  success: true,
                  debug: res.data,
                },
              })
            } else {
              dispatch({
                type: Types.END_MESSAGE,
                payload: {
                  message: 'Houve um erro ao enviar a mensagem.',
                  success: false,
                  debug: res.data,
                },
              })
            }
          })
          .catch((infos) => {
            dispatch({
              type: Types.END_MESSAGE,
              payload: {
                message: 'Houve um erro ao enviar a mensagem.',
                success: false,
                debug: infos,
              },
            })
          })
      })
      .catch((infos) => {
        dispatch({
          type: Types.END_MESSAGE,
          payload: {
            message: 'Houve um erro ao enviar a mensagem.',
            debug: infos,
          },
        })
      })
  },
}
