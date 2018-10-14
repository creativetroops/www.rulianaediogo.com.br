const nodemailer     = require('nodemailer')
const configs        = require('../../configs')
const lodashTemplate = require('lodash.template')
const fs             = require('fs')

class SendMail {
	constructor() {
		this.configs = {
			smtp    : configs.mail_smtp,
			port    : configs.mail_port,
			user    : configs.mail_user,
			pass    : configs.mail_pass,
			to      : configs.mail_to,
			from    : configs.mail_from,
			subject : configs.mail_subject
		}
		this.smtpConfig = {
			host: this.configs.smtp,
			port: this.configs.port,
			auth: {
				user: this.configs.user,
				pass: this.configs.pass
			}
		}
		this.mailOptions = {
			from    : this.configs.from,
			to      : this.configs.to,
			subject : this.configs.subject,
			html    : ''
		}
	}
	loadTemplate(template, data = {}){
        return lodashTemplate(fs.readFileSync(`./modules/SendMail/templates/${template}.html`))(data);
	}
	sendRsvp(req, res){

	}
	sendPaymentSender(req, res){

	}
	sendPayment(req, res){

	}
	sendContact(req, res){
		const data = {
			name    : req.body.name,
			email   : req.body.email,
			message : req.body.message
		}
		const html = this.loadTemplate('contact', data)
		this.send(req, res, html)
	}
	send(req, res, html) {
		this.mailOptions.html = html
		const jsonResponse = {
			'success' : true,
			'infos'   : ''
		}
		const transporter = nodemailer.createTransport(this.smtpConfig)
		transporter.sendMail(this.mailOptions, (err, infos) => {
			let status = 200
			jsonResponse["infos"] = infos
			if (err) {
				status = 500
				jsonResponse["success"] = false
			}
			res.status(status).json(jsonResponse)
		})
	}
}

module.exports = SendMail