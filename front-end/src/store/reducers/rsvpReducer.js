const initState = {}

const rsvpReducer = (state = initState, action) => {
  switch (action.type) {
    case 'START_LOADING_RSVP':
      console.log('start loading rsvp')
      return {
        ...state,
        loadingRsvp: true,
      }
    case 'CREATE_RSVP':
      console.log('created rsvp', action)
      return {
        ...state,
        loadingRsvp: false,
        finalMessage: 'Resposta enviada com sucesso!',
      }
    case 'CLEAR_FINAL_MESSAGE':
      console.log('clear success message')
      return {
        ...state,
        loadingContact: false,
        finalMessage: '',
      }
    case 'CREATE_RSVP_ERROR':
      console.log('create rsvp error', action)
      return {
        ...state,
        loadingRsvp: false,
        finalMessage: 'Houve um erro ao enviar a resposta.',
      }
    default:
      return {
        ...state,
        loadingRsvp: false,
        finalMessage: '',
      }
  }
}

export default rsvpReducer
