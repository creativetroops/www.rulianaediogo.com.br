const protocol = 'https://'
const host = 'rulianaediogo.diogocezar.com'

const apiConfig = {
  baseURL: `${protocol}${host}`,
  endpoints: {
    'send-message': 'send-message',
    'send-billet': 'send-billet',
    'send-deposit': 'send-deposit',
    'send-rsvp': 'send-rsvp',
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
}

export default apiConfig
