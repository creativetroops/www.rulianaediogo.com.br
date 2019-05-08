const express = require('express')

const routes = express.Router()

const PagSeguroController = require('./controllers/PagSeguroController')
const SendMailController = require('./controllers/SendMailController')

routes.post('/send-billet', (req, res) => PagSeguroController.send(req, res))
routes.post('/send-deposit', (req, res) => SendMailController.sendDeposit(req, res))
routes.post('/send-message', (req, res) => SendMailController.sendMessage(req, res))
routes.post('/send-rsvp', (req, res) => SendMailController.sendRsvp(req, res))
routes.post('/change-payment', (req, res) => SendMailController.sendChangePayment(req, res))
routes.use((req, res) => {
  res.json({ message: 'There is nothing here!' })
})

module.exports = routes
