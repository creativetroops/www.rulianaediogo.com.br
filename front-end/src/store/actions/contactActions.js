import Api from '../../api'

export const startLoadingContact = () => {
	return (dispatch) => {
		dispatch({ type: "START_LOADING_CONTACT" })
	}
}

export const createContact = (contact) => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore  = getFirestore()
		const saveObject = {
			...contact,
			createdAt: new Date()
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