const cors       = require('cors')
const express    = require('express')
const bodyParser = require('body-parser')
const configs    = require('./configs')

const PagSeguroGateway = require('./modules/pagseguro-gateway')
const SendEmail        = require('./modules/send-email')
const Routes           = require('./routes/routes')

class Server {
	constructor(){
		this.configureExpress()
		this.PagSeguroGateway = new PagSeguroGateway()
		this.SendEmail        = new SendEmail()
		this.Routes           = new Routes()
		this.Routes.setRoutes(this.app, this)
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
}

new Server()