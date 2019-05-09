const protocol = window.location.hostname === 'localhost' ? 'http://' : 'https://'
const port = 8888
const host = window.location.hostname === 'localhost' ? `localhost:${port}` : 'rulianaediogo.diogocezar.com'

// const protocol = 'https://'
// const host = 'rulianaediogo.diogocezar.com'

// const protocol = 'http://'
// const host = 'localhost:8888'

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
