const express = require('express')

const routes = express.Router()

const PagSeguroController = require('./controllers/PagSeguroController')
const SendMailController = require('./controllers/SendMailController')

routes.post('/send-payment', PagSeguroController.send)
routes.post('/send-contact', SendMailController.sendContact)
routes.post('/send-rsvp', SendMailController.sendRsvp)
routes.use((req, res) => {
  res.json({ message: 'There is nothing here!' })
})

module.exports = routes
