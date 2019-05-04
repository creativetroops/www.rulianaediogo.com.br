// Action Types
const Types = {
  TOOGLE_MODAL: 'modal/TOGGLE_MODAL',
}

// Init State
const initState = {
  modals: null,
}

// Reducers
export default function ModalReducer(state = initState, action) {
  switch (action.type) {
    case Types.TOOGLE_MODAL:
      return {
        ...state,
        [action.payload.id]: action.payload.open,
      }
    default:
      return { ...state }
  }
}

// Actions
export const Creators = {
  toggleModal: (id, open) => (dispatch) => {
    dispatch({ type: Types.TOOGLE_MODAL, payload: { id, open } })
  },
}
