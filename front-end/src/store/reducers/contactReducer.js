const initState = {}

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case 'START_LOADING_CONTACT':
      console.log('start loading contact')
      return {
        ...state,
        loadingContact: true,
      }
    case 'CREATE_CONTACT':
      console.log('created contact', action.saveObject)
      return {
        ...state,
        loadingContact: false,
        finalMessage: 'Contato enviado com sucesso!',
      }
    case 'CREATE_CONTACT_ERROR':
      console.log('create contact error', action.infos)
      return {
        ...state,
        loadingContact: false,
        finalMessage: 'Houve um erro ao enviar o contato.',
      }
    case 'CLEAR_FINAL_MESSAGE':
      console.log('clear success message')
      return {
        ...state,
        loadingContact: false,
        finalMessage: '',
      }
    default:
      return {
        ...state,
        loadingContact: false,
        finalMessage: '',
      }
  }
}

export default contactReducer
