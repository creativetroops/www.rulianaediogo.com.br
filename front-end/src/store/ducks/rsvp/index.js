import api from '../../../services/api'

// Action Types
const Types = {
  START_RSVP: 'rsvp/START_RSVP',
  END_RSVP: 'rsvp/END_RSVP',
}

// Init State
const initState = {
  rsvp: null,
}

// Reducers
export default function MessageReducer(state = initState, action) {
  switch (action.type) {
    case Types.START_RSVP:
      return {
        ...state,
        loading: true,
        message: action.payload.message,
      }
    case Types.END_RSVP:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
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
                  debug: res.data,
                },
              })
            } else {
              dispatch({
                type: Types.END_RSVP,
                payload: {
                  message: 'Houve um erro ao enviar a confirmação de presença.',
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
            debug: infos,
          },
        })
      })
  },
}
