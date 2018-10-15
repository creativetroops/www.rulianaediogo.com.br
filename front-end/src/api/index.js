import axios           from 'axios'
import apiConfig       from '../configs/apiConfig'
import instagramConfig from '../configs/instagramConfig'

class Api {
	constructor() {
		this.axios = axios.create({
			baseURL: this.url
		})
		this.urls = {
			'send-payment': `${apiConfig.baseURL}/${apiConfig.endpoints['send-payment']}`,
			'send-contact': `${apiConfig.baseURL}/${apiConfig.endpoints['send-contact']}`,
			'send-rsvp'   : `${apiConfig.baseURL}/${apiConfig.endpoints['send-rsvp']}`,
			'get-photos'  : `${instagramConfig.baseURL}/${instagramConfig.hashTag}/media/recent?access_token=${instagramConfig.token}&count=${instagramConfig.count}`
		}
		this.endpoints = this.loadApis()
	}
	loadApis = () => {
		return {
			sendPayment: (data) => this.axios.post(this.urls['send-payment'], data, apiConfig.headers),
			sendContact: (data) => this.axios.post(this.urls['send-contact'], data, apiConfig.headers),
			sendRsvp:    (data) => this.axios.post(this.urls['send-rsvp'],    data, apiConfig.headers),
			getPhotos:   ()     => this.axios.get(this.urls['get-photos'],          apiConfig.headers)
		}
	}
}

export default new Api()