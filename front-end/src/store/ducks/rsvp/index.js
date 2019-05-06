import api from '../../../services/api'

// Action Types
const Types = {
  START_RSVP: 'rsvp/START_RSVP',
  END_RSVP: 'rsvp/END_RSVP',
  RESET_RSVP: 'rsvp/RESET_RSVP',
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
    case Types.START_RSVP:
      return {
        ...state,
        loading: true,
        message: action.payload.message,
        success: action.payload.success,
      }
    case Types.END_RSVP:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        success: action.payload.success,
      }
    case Types.RESET_RSVP:
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
  startRsvp: (message = 'Aguarde, carregando...') => (dispatch) => {
    dispatch({ type: Types.START_RSVP, payload: { message } })
  },
  reset: () => (dispatch) => {
    dispatch({ type: Types.RESET_RSVP })
  },
  createRsvp: rsvp => (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    const obj = {
      createdAt: new Date(),
      ...rsvp,
    }
    firestore
      .collection('rsvps')
      .add(obj)
      .then(() => {
        api.endpoints
          .sendRsvp(obj)
          .then((res) => {
            const { success } = res.data
            if (success) {
              dispatch({
                type: Types.END_RSVP,
                payload: {
                  message: 'Confirmação de presença enviada com sucesso!',
                  success: true,
                  debug: res.data,
                },
              })
            } else {
              dispatch({
                type: Types.END_RSVP,
                payload: {
                  message: 'Houve um erro ao enviar a confirmação de presença.',
                  success: false,
                  debug: res.data,
                },
              })
            }
          })
          .catch((infos) => {
            dispatch({
              type: Types.END_RSVP,
              payload: {
                message: 'Houve um erro ao enviar a confirmação de presença.',
                success: false,
                debug: infos,
              },
            })
          })
      })
      .catch((infos) => {
        dispatch({
          type: Types.END_RSVP,
          payload: {
            message: 'Houve um erro ao enviar a confirmação de presença.',
            success: false,
            debug: infos,
          },
        })
      })
  },
}
