const express = require('express')

const routes = express.Router()

const PagSeguroController = require('./controllers/PagSeguroController')
const SendMailController = require('./controllers/SendMailController')

routes.post('/send-payment', (req, res) => {
  PagSeguroController.send(req, res)
})
routes.post('/send-contact', (req, res) => {
  SendMailController.sendContact(req, res)
})
routes.post('/send-rsvp', (req, res) => {
  SendMailController.sendRsvp(req, res)
})
routes.get('/ping', (req, res) => {
  res.send('new pong 7-11')
})
routes.use((req, res) => {
  res.json({ message: 'There is nothing here!' })
})

module.exports = routes
