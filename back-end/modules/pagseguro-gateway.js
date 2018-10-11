const PagSeguro = require('node-pagseguro')
const configs   = require('../configs')

class PagSeguroGateway {
	constructor() {
		this.configs = {
			email         : configs.pagseguro_email,
			token         : configs.pagseguro_sandbox_token,
			sandbox       : configs.pagseguro_sandbox,
			sandbox_email : configs.pagseguro_sandbox_email
		}
		this.shipping = {
			street           : "Rua Primo Bozelli",
			number           : "124",
			district         : "Jd. Bandeirantes",
			city             : "CORNELIO PROCOPIO",
			state            : "PR",
			postal_code      : "86300000",
			same_for_billing : true,
			shipping_cost    : 0
		}
		this.item = {
			qtde        : 1,
			description : "Presente de Casamento"
		}
		this.transaction = {
			method: "boleto"
		}
	}
	setPayment() {
		this.payment = new PagSeguro(this.configs)
	}
	setSender(sender) {
		this.payment.setSender(sender)
	}
	setShipping() {
		this.payment.setShipping(this.shipping)
	}
	setItem(value) {
		this.item['value']        = value
		this.transaction['value'] = value
		this.payment.addItem(this.item)
	}
	send(req, res){
		const value = parseFloat(req.body.value)
		const sender = {
			name       : req.body.name,
			email      : req.body.email,
			cpf_cnpj   : req.body.cpf_cnpj,
			area_code  : req.body.area_code,
			phone      : req.body.phone,
			birth_date : req.body.birth_date
		}
		const senderHash = req.body.senderHash
		this.setPayment()
		this.setSender(sender)
		this.setShipping()
		this.setItem(value)
		const data = this.transaction
		//data['hash'] = senderHash
		const jsonResponse = {
			'success' : true,
			'infos'   : ''
		}
		this.payment.sendTransaction(data,
			(err, infos) => {
				jsonResponse["infos"] = infos;
				if(err) jsonResponse['success'] = false
				res.status(200).json(jsonResponse)
			}
		)
	}
}

module.exports = PagSeguroGateway