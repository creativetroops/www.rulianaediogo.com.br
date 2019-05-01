const cors = require('cors')
const express = require('express')
const routes = require('./routes')

class App {
  constructor() {
    this.configureExpress()
    this.configureRoutes()
  }

  configureRoutes() {
    this.app.use(routes)
  }

  configureExpress() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(cors({ origin: true }))
  }
}

module.exports = new App().app
