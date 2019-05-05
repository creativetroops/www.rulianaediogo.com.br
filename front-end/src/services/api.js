import axios from 'axios'
import apiConfig from '../configs/apiConfig'

class Api {
  constructor() {
    this.axios = axios.create({
      baseURL: this.url,
    })
    this.urls = {
      'send-message': `${apiConfig.baseURL}/${apiConfig.endpoints['send-message']}`,
      'send-billet': `${apiConfig.baseURL}/${apiConfig.endpoints['send-billet']}`,
      'send-deposit': `${apiConfig.baseURL}/${apiConfig.endpoints['send-deposit']}`,
      'send-rsvp': `${apiConfig.baseURL}/${apiConfig.endpoints['send-rsvp']}`,
    }
    this.endpoints = this.loadApis()
  }

  loadApis() {
    return {
      sendBillet: data => this.axios.post(this.urls['send-billet'], data, apiConfig.headers),
      sendDeposit: data => this.axios.post(this.urls['send-billet'], data, apiConfig.headers),
      sendMessage: data => this.axios.post(this.urls['send-message'], data, apiConfig.headers),
      sendRsvp: data => this.axios.post(this.urls['send-rsvp'], data, apiConfig.headers),
    }
  }
}

const api = new Api()

export default api
