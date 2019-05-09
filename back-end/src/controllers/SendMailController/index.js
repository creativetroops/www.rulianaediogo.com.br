const nodemailer = require('nodemailer')
const lodashTemplate = require('lodash.template')
const fs = require('fs')
const axios = require('axios')
const xmlParser = require('xml2json')
const configs = require('../../config')

class SendMailController {
  constructor() {
    this.configs = {
      smtp: configs.mail_smtp,
      port: configs.mail_port,
      user: configs.mail_user,
      pass: configs.mail_pass,
      to: configs.mail_to,
      from: configs.mail_from,
      subject: configs.mail_subject,
    }
    this.smtpConfig = {
      host: this.configs.smtp,
      port: this.configs.port,
      auth: {
        user: this.configs.user,
        pass: this.configs.pass,
      },
    }
    this.mailOptions = {
      from: this.configs.from,
      to: this.configs.to,
      subject: this.configs.subject,
      html: '',
    }
  }

  loadTemplate(template, data = {}) {
    return lodashTemplate(fs.readFileSync(`${__dirname}/templates/${template}.html`))(data)
  }

  sendMessage(req, res) {
    const html = this.loadTemplate('message', req.body)
    this.send(html, res)
  }

  sendDeposit(req, res) {
    const htmlReciver = this.loadTemplate('deposit-reciver', req.body)
    const htmlSender = this.loadTemplate('deposit-sender', req.body)
    this.send(htmlReciver, res)
    this.send(htmlSender, res, req.body.email)
    res.status(200).json({ success: true })
  }

  sendRsvp(req, res) {
    const html = this.loadTemplate('rsvp', req.body)
    this.send(html, res)
  }

  getStatus(status) {
    switch (status) {
      case 1:
        return 'Aguardando pagamento'
      case 2:
        return 'Em análise'
      case 3:
        return 'Paga'
      case 4:
        return 'Disponível'
      case 5:
        return 'Em disputa'
      case 6:
        return 'Devolvida'
      case 7:
        return 'Cancelada'
      case 8:
        return 'Debitado'
      case 9:
        return 'Retenção temporária'
      default:
        return 'Não informado'
    }
  }

  sendChangePayment(req, res) {
    const { notificationCode } = req.body
    const email = configs.pagseguro_email
    let token = configs.pagseguro_token
    let isSandBox = ''
    if (configs.pagseguro_sandbox) {
      token = configs.pagseguro_sandbox_token
      isSandBox = '.sandbox'
    }
    const url = `https://ws${isSandBox}.pagseguro.uol.com.br/v2/transactions/notifications/${notificationCode}?email=${email}&token=${token}`
    if (notificationCode) {
      axios.get(url).then((response) => {
        const { data } = response
        const paymentInformation = JSON.parse(xmlParser.toJson(data))
        const toSend = {
          name: paymentInformation.transaction.sender.name,
          email: paymentInformation.transaction.sender.email,
          phone: `(${paymentInformation.transaction.sender.phone.areaCode}) ${
            paymentInformation.transaction.sender.phone.number
          }`,
          value: paymentInformation.transaction.grossAmount,
          status: this.getStatus(paymentInformation.transaction.status),
        }
        const html = this.loadTemplate('change-payment', toSend)
        this.send(html, res)
      })
    }
  }

  sendPaymentReciver(data) {
    const html = this.loadTemplate('billet-reciver', data)
    this.send(html)
  }

  sendPaymentSender(data, email) {
    const html = this.loadTemplate('billet-sender', data)
    this.send(html, null, email)
  }

  sendPayment(data) {
    this.sendPaymentReciver(data)
    this.sendPaymentSender(data, data.sender.email)
  }

  send(html, res, email = '') {
    this.mailOptions.html = html
    const jsonResponse = {
      success: true,
      infos: '',
    }
    const transporter = nodemailer.createTransport(this.smtpConfig)
    if (email) {
      this.mailOptions.to = email
    }
    transporter.sendMail(this.mailOptions, (err, infos) => {
      if (res) {
        let status = 200
        jsonResponse.infos = infos
        if (err) {
          status = 500
          jsonResponse.success = false
        }
        res.status(status).json(jsonResponse)
      } else {
        return err === true
      }
      return false
    })
  }
}

module.exports = new SendMailController()
