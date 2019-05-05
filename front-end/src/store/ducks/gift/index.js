import api from '../../../services/api'

// Action Types
const Types = {
  START_GIFT_BILLET: 'gift/START_GIFT_BILLET',
  START_GIFT_DEPOSIT: 'gift/START_GIFT_DEPOSIT',
  END_GIFT_BILLET: 'gift/END_GIFT_BILLET',
  END_GIFT_DEPOSIT: 'gift/END_GIFT_DEPOSIT',
}

// Init State
const initState = {
  gift: null,
}

// Reducers
export default function GiftReducer(state = initState, action) {
  switch (action.type) {
    case Types.START_GIFT_BILLET:
      return {
        ...state,
        loading: true,
        message: action.payload.message,
      }
    case Types.END_GIFT_BILLET:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      }
    case Types.START_GIFT_DEPOSIT:
      return {
        ...state,
        loading: true,
        message: action.payload.message,
      }
    case Types.END_GIFT_DEPOSIT:
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
  startGiftBillet: (message = 'Aguarde, carregando...') => (dispatch) => {
    dispatch({ type: Types.START_GIFT_BILLET, payload: { message } })
  },
  startGiftDeposit: (message = 'Aguarde, carregando...') => (dispatch) => {
    dispatch({ type: Types.START_GIFT_DEPOSIT, payload: { message } })
  },
  createGiftBillet: billet => (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    const obj = {
      createdAt: new Date(),
      ...billet,
    }
    firestore
      .collection('billets')
      .add(obj)
      .then(() => {
        api.endpoints
          .sendBillet(obj)
          .then((res) => {
            const { success } = res.data
            if (success) {
              dispatch({
                type: Types.END_GIFT_BILLET,
                payload: {
                  message: 'Boleto gerado com sucesso!',
                  debug: res.data,
                },
              })
            } else {
              dispatch({
                type: Types.END_GIFT_BILLET,
                payload: {
                  message: 'Houve um erro ao criar o boleto.',
                  debug: res.data,
                },
              })
            }
          })
          .catch((infos) => {
            dispatch({
              type: Types.END_GIFT_BILLET,
              payload: {
                message: 'Houve um erro ao criar o boleto.',
                debug: infos,
              },
            })
          })
      })
      .catch((infos) => {
        dispatch({
          type: Types.END_GIFT_BILLET,
          payload: {
            message: 'Houve um erro ao criar o boleto.',
            debug: infos,
          },
        })
      })
  },
  createGiftDeposit: billet => (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    const obj = {
      createdAt: new Date(),
      ...billet,
    }
    firestore
      .collection('deposits')
      .add(obj)
      .then(() => {
        api.endpoints
          .sendDeposit(obj)
          .then((res) => {
            const { success } = res.data
            if (success) {
              dispatch({
                type: Types.END_GIFT_DEPOSIT,
                payload: {
                  message: 'Depósito gerado com sucesso!',
                  debug: res.data,
                },
              })
            } else {
              dispatch({
                type: Types.END_GIFT_DEPOSIT,
                payload: {
                  message: 'Houve um erro ao criar o depósito.',
                  debug: res.data,
                },
              })
            }
          })
          .catch((infos) => {
            dispatch({
              type: Types.END_GIFT_DEPOSIT,
              payload: {
                message: 'Houve um erro ao criar o depósito.',
                debug: infos,
              },
            })
          })
      })
      .catch((infos) => {
        dispatch({
          type: Types.END_GIFT_DEPOSIT,
          payload: {
            message: 'Houve um erro ao criar o depósito.',
            debug: infos,
          },
        })
      })
  },
}
