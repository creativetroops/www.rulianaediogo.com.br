require('dotenv/config')

module.exports = {
	'server_port'             : process.env.SERVER_PORT,

	'pagseguro_email'         : process.env.PAGSEGURO_EMAIL,
	'pagseguro_token'         : process.env.PAGSEGURO_TOKEN,
	'pagseguro_sandbox_token' : process.env.PAGSEGURO_SANDBOX_TOKEN,
	'pagseguro_sandbox_email' : process.env.PAGSEGURO_SANDBOX_EMAIL,
	'pagseguro_sandbox'       : process.env.PAGSEGURO_SANDBOX === 'true',

	'pagseguro_default_shipping_street'           : process.env.PAGSEGURO_DEFAULT_SHIPPING_STREET,
	'pagseguro_default_shipping_number'           : process.env.PAGSEGURO_DEFAULT_SHIPPING_NUMBER,
	'pagseguro_default_shipping_district'         : process.env.PAGSEGURO_DEFAULT_SHIPPING_DISTRICT,
	'pagseguro_default_shipping_city'             : process.env.PAGSEGURO_DEFAULT_SHIPPING_CITY,
	'pagseguro_default_shipping_state'            : process.env.PAGSEGURO_DEFAULT_SHIPPING_STATE,
	'pagseguro_default_shipping_postal_code'      : process.env.PAGSEGURO_DEFAULT_SHIPPING_POSTAL_CODE,
	'pagseguro_default_shipping_same_for_billing' : process.env.PAGSEGURO_DEFAULT_SHIPPING_SAME_FOR_BILLING === 'true',
	'pagseguro_default_shipping_shipping_cost'    : process.env.PAGSEGURO_DEFAULT_SHIPPING_SHIPPING_COST,

	'pagseguro_default_item_qtde'          : process.env.PAGSEGURO_DEFAULT_ITEM_QTDE,
	'pagseguro_default_item_description'   : process.env.PAGSEGURO_DEFAULT_ITEM_DESCRIPTION,

	'pagseguro_default_transaction_method' : process.env.PAGSEGURO_DEFAULT_TRANSACTION_METHOD,

	'mail_smtp'               : process.env.MAIL_SMTP,
	'mail_port'               : process.env.MAIL_PORT,
	'mail_user'               : process.env.MAIL_USER,
	'mail_pass'               : process.env.MAIL_PASS,
	'mail_to'                 : process.env.MAIL_TO,
	'mail_from'               : process.env.MAIL_FROM,
	'mail_subject'            : process.env.MAIL_SUBJECT,
}