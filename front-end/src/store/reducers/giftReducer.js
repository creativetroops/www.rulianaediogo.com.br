const initState = {}

const giftReducer = (state = initState, action) => {
  switch (action.type) {
    case 'START_LOADING_GIFT':
      console.log('start loading gift')
      return {
        ...state,
        loadingGift: true,
      }
    case 'CREATE_GIFT':
      console.log('created gift', action.saveObject)
      return {
        ...state,
        loadingGift: false,
        finalMessage: 'Presente enviado com sucesso!',
        feedBack: action.saveObject,
      }
    case 'CREATE_GIFT_ERROR':
      console.log('create gift error', action.infos)
      return {
        ...state,
        loadingGift: false,
        finalMessage: 'Houve um erro ao enviar o presente.',
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
        loadingGift: false,
        finalMessage: '',
      }
  }
}

export default giftReducer
