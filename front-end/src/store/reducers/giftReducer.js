const initState = {}

const giftReducer = (state = initState, action) => {
	switch(action.type){
		case "START_LOADING_GIFT":
			console.log("start loading gift")
			return {
				...state,
				loadingGift: true,
			}
		case 'CREATE_GIFT':
			console.log("created gift", action.saveObject);
			return {
				...state,
				loadingGift: false,
				giftMessage: 'Presente enviado com sucesso!'
			}
		case 'CREATE_GIFT_ERROR':
			console.log('create gift error', action.infos)
			return {
				...state,
				loadingGift: false,
				giftMessage: 'Houve um erro ao enviar o presente.'
			}
		default:
			return {
				...state,
				loadingGift: false,
				giftMessage: ''
			}
	}
}

export default giftReducer