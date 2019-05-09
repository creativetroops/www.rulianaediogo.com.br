const nodemailer = require('nodemailer')
const lodashTemplate = require('lodash.template')
const fs = require('fs')
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

  sendChangePayment(req, res) {
    const html = `<html>${JSON.stringify(req.body)}</html`
    this.send(html, res)
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
