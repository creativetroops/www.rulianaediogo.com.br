const apiConfig = {
	baseURL : 'http://localhost:8888',
	endpoints : {
		'send-payment': 'pagseguro-gateway/send-payment',
		'send-rsvp'   : 'send-rsvp',
		'send-contact': 'send-contact'
	},
	headers : {
		'Access-Control-Allow-Origin': '*'
	}
}

export default apiConfig