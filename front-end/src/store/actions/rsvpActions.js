import Api from '../../api'

export const startLoadingRsvp = () => (dispatch) => {
  dispatch({ type: 'START_LOADING_RSVP' })
}

export const clearFinalMessage = () => (dispatch) => {
  dispatch({ type: 'CLEAR_FINAL_MESSAGE' })
}

export const createRsvp = rsvp => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore()
  const saveObject = {
    ...rsvp,
    createdAt: new Date(),
  }
  firestore
    .collection('rsvps')
    .add(saveObject)
    .then(() => {
      Api.endpoints
        .sendRsvp(saveObject)
        .then((res) => {
          const { infos } = res.data
          if (res.data.success) {
            dispatch({
              type: 'CREATE_RSVP',
              saveObject,
            })
          } else {
            dispatch({
              type: 'CREATE_RSVP_ERROR',
              infos,
            })
          }
        })
        .catch((infos) => {
          dispatch({
            type: 'CREATE_RSVP_ERROR',
            infos,
          })
        })
    })
    .catch((infos) => {
      dispatch({ type: 'CREATE_RSVP_ERROR', infos })
    })
}
