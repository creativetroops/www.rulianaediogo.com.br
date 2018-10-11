const initState = {}

const rsvpReducer = (state = initState, action) => {
	switch(action.type){
		case "START_LOADING_RSVP":
			console.log("start loading rsvp")
			return {
				...state,
				loadingRsvp: true,
			}
		case 'CREATE_RSVP':
			console.log('created rsvp', action)
			return {
				...state,
				loadingRsvp: false,
				rsvpMessage: 'Resposta enviada com sucesso!'
			}
		case 'CREATE_RSVP_ERROR':
			console.log('create rsvp error', action)
			return {
				...state,
				loadingRsvp: false,
				rsvpMessage: 'Houve um erro ao enviar a resposta.'
			}
		default:
			return {
				...state,
				loadingRsvp: false,
				rsvpMessage: ''
			}
	}
}

export default rsvpReducer