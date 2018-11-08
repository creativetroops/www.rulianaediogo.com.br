const cors       = require('cors')
const express    = require('express')
const bodyParser = require('body-parser')
const configs    = require('./configs')
const routes     = require('./routes')

class Server {
	constructor(){
		this.configureExpress()
		this.configureRoutes()
	}
	configureRoutes(){
		this.app.use(routes)
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