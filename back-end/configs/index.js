require('dotenv/config')

module.exports = {
	'pagseguro_email'         : process.env.PAGSEGURO_EMAIL,
	'pagseguro_token'         : process.env.PAGSEGURO_TOKEN,
	'pagseguro_sandbox_token' : process.env.PAGSEGURO_SANDBOX_TOKEN,
	'pagseguro_sandbox_email' : process.env.PAGSEGURO_SANDBOX_EMAIL,
	'pagseguro_sandbox'       : process.env.PAGSEGURO_SANDBOX === 'true',
	'server_port'             : process.env.SERVER_PORT,
	'mail_smtp'               : process.env.MAIL_SMTP,
	'mail_port'               : process.env.MAIL_PORT,
	'mail_user'               : process.env.MAIL_USER,
	'mail_pass'               : process.env.MAIL_PASS,
	'mail_to'                 : process.env.MAIL_TO,
	'mail_from'               : process.env.MAIL_FROM,
	'mail_subject'            : process.env.MAIL_SUBJECT
}