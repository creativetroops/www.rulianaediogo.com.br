import Api from '../../api'

export const startLoadingGift = () => {
	return dispatch => {
		dispatch({ type: "START_LOADING_GIFT" });
	}
}

export const clearFinalMessage = () => {
	return (dispatch) => {
		dispatch({ type: "CLEAR_FINAL_MESSAGE" })
	}
}

export const createGift = (gift) => {
	return (dispatch, getState, { getFirestore }) => {
		const saveObject = {
			...gift,
			createdAt: new Date()
		}
		Api.endpoints
			.sendPayment(saveObject)
			.then(res => {
				const infos = res.data.infos
				if (res.data.success){
					const firestore = getFirestore()
					saveObject['infos'] = infos
					firestore
						.collection('gifts')
						.add(saveObject)
						.then(() => {
							dispatch({
								type: 'CREATE_GIFT',
								saveObject,
							})
						})
						.catch(infos => {
							dispatch({ type: 'CREATE_GIFT_ERROR', infos })
						})
				}
				else dispatch({
					type: 'CREATE_GIFT_ERROR',
					infos
				})
			})
			.catch(infos => {
				dispatch({
					type: 'CREATE_GIFT_ERROR',
					infos
				})
			})
	}
}