class Routes{
    setRoutes(app, server){
        app.post("/pagseguro-gateway/send-payment", (req, res) => {
            server.PagSeguroGateway.send(req, res)
        })
        app.post("/send-contact", (req, res) => {
            server.SendEmail.send(req, res, 'contact')
        })
        app.post("/send-rsvp", (req, res) => {
            server.SendEmail.send(req, res, 'rsvp')
        })
        app.get("/ping", (req, res) => {
            res.send('pong')
        })
    }
}

module.exports = Routes