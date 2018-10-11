const nodemailer = require('nodemailer')
const configs    = require('../configs')

class SendEmail {
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
	send(req, res, type) {
		this.mailOptions.html = `
			<h1>${type} - Ruliana e Diogo</h1>
			<p>Nome: ${req.body.name}</p>
			<p>Email: ${req.body.email}</p>
			<p>Mensagem: ${req.body.message}</p>
		`;
		const jsonResponse = {
			'success' : true,
			'infos'   : ''
		}
		//res.status(200).json(jsonResponse)
		const transporter = nodemailer.createTransport(this.smtpConfig)
		transporter.sendMail(this.mailOptions, (err, infos) => {
			jsonResponse["infos"] = infos
			if (err) jsonResponse["success"] = false
			res.status(200).json(jsonResponse)
		})
	}
}

module.exports = SendEmail