const initState = {
  modals: null,
}

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOOGLE_MODAL':
      return {
        ...state,
        [action.payload.id]: action.payload.open,
      }
    default:
      return { ...state }
  }
}

export default modalReducer
