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

  sendContact(req, res) {
    const data = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    }
    const html = this.loadTemplate('contact', data)
    this.send(html, res)
  }

  sendRsvp(req, res) {
    const peopleList = req.body.peopleList.length
      ? req.body.peopleList.map(people => `${people}<br/>`).join('')
      : ''
    const childrenList = req.body.childrenList.length
      ? req.body.childrenList.map(child => `${child}<br/>`).join('')
      : ''
    const data = {
      name: req.body.name,
      email: req.body.email,
      areaCode: req.body.areaCode,
      phone: req.body.phone,
      peopleList,
      childrenList,
      message: req.body.message,
    }
    const html = this.loadTemplate('rsvp', data)
    this.send(html, res)
  }

  sendPaymentReciver(data) {
    const html = this.loadTemplate('payment-reciver', data)
    this.send(html)
  }

  sendPaymentSender(data, email) {
    const html = this.loadTemplate('payment-sender', data)
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
