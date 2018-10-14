class Routes{
    setRoutes(app, server){
        app.post("/pagseguro-gateway/send-payment", (req, res) => {
            server.PagSeguroGateway.send(req, res)
        })
        app.post("/send-contact", (req, res) => {
            server.SendMail.sendContact(req, res)
        })
        app.post("/send-rsvp", (req, res) => {
            server.SendMail.sendRsvp(req, res)
        })
        app.get("/ping", (req, res) => {
            res.send('new pong 14-0')
        })
    }
}

module.exports = Routes