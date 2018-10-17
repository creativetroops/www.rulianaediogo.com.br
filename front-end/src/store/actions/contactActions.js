import Api from '../../api'

export const startLoadingContact = () => {
	return (dispatch) => {
		dispatch({ type: "START_LOADING_CONTACT" })
	}
}

export const clearFinalMessage = () => {
	return (dispatch) => {
		dispatch({ type: "CLEAR_FINAL_MESSAGE" })
	}
}

export const createContact = (contact) => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore  = getFirestore()
		const saveObject = {
			createdAt : new Date(),
			email     : contact.email,
			message   : contact.message,
			name      : contact.name
		}
		firestore
			.collection('contacts')
			.add(saveObject)
			.then(() => {
				Api.endpoints
					.sendContact(saveObject)
					.then(res => {
						const infos = res.data.infos
						if (res.data.success) dispatch({
								type: 'CREATE_CONTACT',
								saveObject
							})
						else dispatch({
								type: 'CREATE_CONTACT_ERROR',
								infos
							})
					})
					.catch(infos => {
						dispatch({
							type: 'CREATE_CONTACT_ERROR',
							infos
						})
					})
			})
			.catch(infos => {
				dispatch({ type: 'CREATE_CONTACT_ERROR', infos })
			})
	}
}