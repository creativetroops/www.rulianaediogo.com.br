import api from '../../../services/api'

// Action Types
const Types = {
  START_GIFT_BILLET: 'gift/START_GIFT_BILLET',
  START_GIFT_DEPOSIT: 'gift/START_GIFT_DEPOSIT',
  END_GIFT_BILLET: 'gift/END_GIFT_BILLET',
  END_GIFT_DEPOSIT: 'gift/END_GIFT_DEPOSIT',
  RESET_GIFT_BILLET: 'gift/RESET_GIFT_BILLET',
  RESET_GIFT_DEPOSIT: 'gift/RESET_GIFT_DEPOSIT',
}

// Init State
const initState = {
  loadingBillet: null,
  messageBillet: null,
  successBillet: null,
  informationBillet: null,
  loadingDeposit: null,
  messageDeposit: null,
  successDeposit: null,
  valueDeposit: null,
}

// Reducers
export default function GiftReducer(state = initState, action) {
  switch (action.type) {
    case Types.START_GIFT_BILLET:
      return {
        ...state,
        loadingBillet: true,
        messageBillet: action.payload.message,
        successBillet: action.payload.success,
      }
    case Types.END_GIFT_BILLET:
      return {
        ...state,
        loadingBillet: false,
        messageBillet: action.payload.message,
        successBillet: action.payload.success,
        informationBillet: action.payload.billet,
      }
    case Types.START_GIFT_DEPOSIT:
      return {
        ...state,
        loadingDeposit: true,
        messageDeposit: action.payload.message,
        successDeposit: action.payload.success,
      }
    case Types.END_GIFT_DEPOSIT:
      console.log(action)
      return {
        ...state,
        loadingDeposit: false,
        messageDeposit: action.payload.message,
        successDeposit: action.payload.success,
        valueDeposit: action.payload.value,
      }
    case Types.RESET_GIFT_BILLET:
      return {
        ...state,
        loadingBillet: null,
        messageBillet: null,
        successBillet: null,
        billet: null,
      }
    case Types.RESET_GIFT_DEPOSIT:
      return {
        ...state,
        loadingDeposit: null,
        messageDeposit: null,
        successDeposit: null,
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
  resetBillet: () => (dispatch) => {
    dispatch({ type: Types.RESET_GIFT_BILLET })
  },
  resetDeposit: () => (dispatch) => {
    dispatch({ type: Types.RESET_GIFT_DEPOSIT })
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
              global.console.log(res.data)
              dispatch({
                type: Types.END_GIFT_BILLET,
                payload: {
                  message: 'Boleto gerado com sucesso!',
                  debug: res.data,
                  informationBillet: res.data,
                  success: true,
                },
              })
            } else {
              dispatch({
                type: Types.END_GIFT_BILLET,
                payload: {
                  message: 'Houve um erro ao criar o boleto.',
                  debug: res.data,
                  success: false,
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
                success: false,
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
  createGiftDeposit: deposit => (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    const obj = {
      createdAt: new Date(),
      ...deposit,
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
                  value: deposit.value,
                  debug: res.data,
                  success: true,
                },
              })
            } else {
              dispatch({
                type: Types.END_GIFT_DEPOSIT,
                payload: {
                  message: 'Houve um erro ao criar o depósito.',
                  debug: res.data,
                  success: false,
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
                success: false,
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
            success: false,
          },
        })
      })
  },
}
