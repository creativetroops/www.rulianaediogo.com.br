const PagSeguro = require('node-pagseguro')
const configs = require('../../config')
const SendMailController = require('../SendMailController')

class PagSeguroController {
  constructor() {
    this.configs = {
      email: configs.pagseguro_email,
      token: configs.pagseguro_sandbox_token,
      sandbox: configs.pagseguro_sandbox,
      sandbox_email: configs.pagseguro_sandbox_email,
    }
    this.shipping = {
      street: configs.pagseguro_default_shipping_street,
      number: configs.pagseguro_default_shipping_number,
      district: configs.pagseguro_default_shipping_district,
      city: configs.pagseguro_default_shipping_city,
      state: configs.pagseguro_default_shipping_state,
      postal_code: configs.pagseguro_default_shipping_postal_code,
      same_for_billing: configs.pagseguro_default_shipping_same_for_billing,
      shipping_cost: configs.pagseguro_default_shipping_shipping_cost,
    }
    this.item = {
      qtde: configs.pagseguro_default_item_qtde,
      description: configs.pagseguro_default_item_description,
    }
    this.transaction = {
      method: configs.pagseguro_default_transaction_method,
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
    this.item.value = value
    this.transaction.value = value
    this.payment.addItem(this.item)
  }

  send(req, res) {
    const value = parseFloat(req.body.value)
    const sender = {
      name: req.body.name,
      email: req.body.email,
      cpf_cnpj: req.body.cpfCnpj,
      area_code: req.body.areaCode,
      phone: req.body.phone,
      birth_date: req.body.birthDate,
    }
    const { senderHash } = req.body
    this.setPayment()
    this.setSender(sender)
    this.setShipping()
    this.setItem(value)
    const data = this.transaction
    if (!this.configs.sandbox) data.hash = senderHash
    const jsonResponse = {
      success: true,
      infos: '',
    }
    this.payment.sendTransaction(data, (err, infos) => {
      let status = 200
      jsonResponse.infos = infos
      if (err) {
        console.log(err)
        jsonResponse.success = false
        status = 500
      }
      const infosMail = {
        sender,
        infos,
        message: req.body.message,
      }
      SendMailController.sendPayment(infosMail)
      res.status(status).json(jsonResponse)
    })
  }
}

module.exports = new PagSeguroController()