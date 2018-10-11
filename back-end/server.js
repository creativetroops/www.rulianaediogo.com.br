const cors       = require('cors')
const express    = require('express')
const bodyParser = require('body-parser')
const configs    = require('./configs')

const PagSeguroGateway = require('./modules/pagseguro-gateway')
const SendEmail        = require('./modules/send-email')

class Server {
	constructor(){
		this.configureExpress()
		this.setRoutes()
		this.PagSeguroGateway = new PagSeguroGateway()
		this.SendEmail        = new SendEmail()
	}
	configureExpress() {
		this.app = express()
		this.app.use(bodyParser.json())
		this.app.use(bodyParser.urlencoded({ extended: false }))
		this.app.use(cors({ origin: true }))
		this.app.listen(configs.server_port, () => {
			console.log(`Server started at port: ${configs.server_port}`)
		})
	}
	setRoutes() {
		this.app.post("/pagseguro-gateway/send-payment", (req, res) => {
			this.PagSeguroGateway.send(req, res)
		})
		this.app.post("/send-contact", (req, res) => {
			this.SendEmail.send(req, res, 'contact')
		})
		this.app.post("/send-rsvp", (req, res) => {
			this.SendEmail.send(req, res, 'rsvp');
		});
	}
}

new Server()