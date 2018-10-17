import Api from '../../api'

export const startLoadingInstagram = () => {
	return (dispatch) => {
		dispatch({ type: "START_LOADING_INSTAGRAM" });
	}
}

export const loadInstagramPhotos = (contact) => {
	return (dispatch, getState) => {
		Api.endpoints.getPhotos()
			.then((res) => {
				const photos = res.data.data
				dispatch({
					type: 'LOAD_INSTAGRAM_PHOTOS',
					photos
				})
			})
			.catch((infos) => {
				dispatch({
					type: 'LOAD_INSTAGRAM_PHOTOS_ERROR',
					infos
				})
			})
	}
}