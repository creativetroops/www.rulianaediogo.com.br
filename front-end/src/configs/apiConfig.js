const protocol = (window.location.hostname === "localhost") ? `http://` : 'https://'
const port     = 8888
const host     = (window.location.hostname === "localhost") ? `localhost:${port}` : 'rulianaediogo.diogocezar.com'

const apiConfig = {
	baseURL : `${protocol}${host}`,
	endpoints : {
		'send-payment': 'send-payment',
		'send-rsvp'   : 'send-rsvp',
		'send-contact': 'send-contact'
	},
	headers : {
		'Access-Control-Allow-Origin': '*'
	}
}

export default apiConfig