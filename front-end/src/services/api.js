import axios from 'axios'
import apiConfig from '../configs/apiConfig'
import instagramConfig from '../configs/instagramConfig'

class Api {
  constructor() {
    this.axios = axios.create({
      baseURL: this.url,
    })
    this.urls = {
      'send-message': `${apiConfig.baseURL}/${apiConfig.endpoints['send-message']}`,
      'send-payment': `${apiConfig.baseURL}/${apiConfig.endpoints['send-payment']}`,
      'send-rsvp': `${apiConfig.baseURL}/${apiConfig.endpoints['send-rsvp']}`,
      'get-photos': `${instagramConfig.baseURL}/${
        instagramConfig.hashTag
      }/media/recent?access_token=${instagramConfig.token}&count=${instagramConfig.count}`,
    }
    this.endpoints = this.loadApis()
  }

  loadApis = () => ({
    sendPayment: data => this.axios.post(this.urls['send-payment'], data, apiConfig.headers),
    sendMessage: data => this.axios.post(this.urls['send-message'], data, apiConfig.headers),
    sendRsvp: data => this.axios.post(this.urls['send-rsvp'], data, apiConfig.headers),
    getPhotos: () => this.axios.get(this.urls['get-photos'], apiConfig.headers),
  })
}

export default new Api()
