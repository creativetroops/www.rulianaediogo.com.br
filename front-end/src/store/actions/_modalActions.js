export const toggleModal = (id, open) => (dispatch) => {
  dispatch({ type: 'TOOGLE_MODAL', payload: { id, open } })
}
