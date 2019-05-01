import Api from '../../services/api'

export const startLoadingContact = () => (dispatch) => {
  dispatch({ type: 'START_LOADING_CONTACT' })
}

export const clearFinalMessage = () => (dispatch) => {
  dispatch({ type: 'CLEAR_FINAL_MESSAGE' })
}

export const createContact = contact => (
  dispatch,
  getState,
  { getFirestore },
) => {
  const firestore = getFirestore()
  const saveObject = {
    createdAt: new Date(),
    email: contact.email,
    message: contact.message,
    name: contact.name,
  }
  firestore
    .collection('contacts')
    .add(saveObject)
    .then(() => {
      Api.endpoints
        .sendContact(saveObject)
        .then((res) => {
          const { infos } = res.data
          if (res.data.success) {
            dispatch({
              type: 'CREATE_CONTACT',
              saveObject,
            })
          } else {
            dispatch({
              type: 'CREATE_CONTACT_ERROR',
              infos,
            })
          }
        })
        .catch((infos) => {
          dispatch({
            type: 'CREATE_CONTACT_ERROR',
            infos,
          })
        })
    })
    .catch((infos) => {
      dispatch({ type: 'CREATE_CONTACT_ERROR', infos })
    })
}
