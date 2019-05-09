const request = require('request')
const xmlParser = require('xml2json')

class PagSeguro {
  constructor(params) {
    this.email = params.email
    this.token = params.token
    this.mode = params.sandbox === true ? 'sandbox' : 'prod'
    this.currency = params.currency || 'BRL'
    this.sandbox_email = params.sandbox_email
    switch (this.mode) {
      case 'sandbox':
        this.url = 'https://ws.sandbox.pagseguro.uol.com.br/v2'
        break
      default:
        this.url = 'https://ws.pagseguro.uol.com.br/v2'
        break
    }
    this.checkoutData = {
      email: this.email,
      token: this.token,
      mode: this.mode,
      currency: this.currency,
      url: this.url,
    }
    this.items = []
  }

  setSender(sender) {
    this.checkoutData.senderName = sender.name
    this.checkoutData.senderAreaCode = sender.area_code
    this.checkoutData.senderPhone = sender.phone
    this.checkoutData.senderEmail = this.mode === 'sandbox' ? this.sandbox_email : sender.email
    if (sender.cpf_cnpj.length === 11) {
      this.checkoutData.senderCPF = sender.cpf_cnpj
    } else {
      this.checkoutData.senderCNPJ = sender.cpf_cnpj
    }
    this.sender = sender
  }

  setShipping(shipping) {
    this.checkoutData.shippingAddressStreet = shipping.street
    this.checkoutData.shippingAddressNumber = shipping.number
    this.checkoutData.shippingAddressDistrict = shipping.district
    this.checkoutData.shippingAddressCity = shipping.city
    this.checkoutData.shippingAddressState = shipping.state
    this.checkoutData.shippingAddressPostalCode = shipping.postal_code
    this.checkoutData.shippingAddressCountry = shipping.country || 'BRA'
    if (shipping.same_for_billing) this.setBilling(shipping)
    this.shipping = shipping
  }

  setBilling(billing) {
    this.checkoutData.billingAddressStreet = billing.street
    this.checkoutData.billingAddressNumber = billing.number
    this.checkoutData.billingAddressDistrict = billing.district
    this.checkoutData.billingAddressCity = billing.city
    this.checkoutData.billingAddressState = billing.state
    this.checkoutData.billingAddressPostalCode = billing.postal_code
    this.checkoutData.billingAddressCountry = billing.country || 'BRA'
    this.billing = billing
  }

  setCreditCardHolder(holder) {
    this.holder = holder
  }

  addItem(item) {
    this.items.push({
      qtde: item.qtde,
      value: item.value,
      description: item.description,
    })
    this.checkoutData[`itemQuantity${this.items.length}`] = item.qtde
    this.checkoutData[`itemAmount${this.items.length}`] = item.value.toFixed(2)
    this.checkoutData[`itemId${this.items.length}`] = this.items.length
    this.checkoutData[`itemDescription${this.items.length}`] = item.description
  }

  sendTransaction(transaction) {
    return new Promise((resolve, reject) => {
      this.checkoutData.paymentMethod = transaction.method
      this.checkoutData.installmentQuantity = transaction.installments || 1
      this.checkoutData.installmentValue = (
        transaction.value / this.checkoutData.installmentQuantity
      ).toFixed(2)
      this.checkoutData.senderHash = transaction.hash
      if (transaction.installments && transaction.installments > 1) {
        this.checkoutData.noInterestInstallmentQuantity = transaction.installments
      }
      if (this.checkoutData.paymentMethod === 'creditCard') {
        this.checkoutData.creditCardToken = transaction.credit_card_token
        this.checkoutData.creditCardHolderName = this.holder ? this.holder.name : this.sender.name
        this.checkoutData.creditCardHolderAreaCode = this.holder
          ? this.holder.area_code
          : this.sender.area_code
        this.checkoutData.creditCardHolderPhone = this.holder
          ? this.holder.phone
          : this.sender.phone
        this.checkoutData.creditCardHolderBirthDate = this.holder
          ? this.holder.birth_date
          : this.sender.birth_date
        const cpf_cnpj = this.holder ? this.holder.cpf_cnpj : this.sender.cpf_cnpj
        if (cpf_cnpj.length === 11) {
          this.checkoutData.creditCardHolderCPF = cpf_cnpj
        } else {
          this.checkoutData.creditCardHolderCNPJ = cpf_cnpj
        }
      }
      const params = {
        url: `${this.url}/transactions?token=${this.token}&email=${this.email}`,
        form: this.checkoutData,
      }

      console.log(params)

      request.post(params, (err, response, body) => {
        if (err) {
          reject(err)
        }
        if (response.statusCode === 200) {
          const json = JSON.parse(xmlParser.toJson(body))
          resolve(json.transaction)
        }
        if (body) {
          const json = JSON.parse(xmlParser.toJson(body))
          if (json.errors && json.errors.error) {
            reject(json.errors.error)
          }
        } else {
          reject('error')
        }
      })
    })
  }

  sessionId() {
    return new Promise((resolve, reject) => {
      const url = `${this.url}/sessions?token=${this.token}&email=${this.email}`
      request.post({ url }, (err, response, body) => {
        if (err) {
          reject(err)
        }
        if (response.statusCode === 200) {
          const json = JSON.parse(xmlParser.toJson(body))
          resolve(json.transaction)
        }
        const json = JSON.parse(xmlParser.toJson(body))
        if (json.errors && json.errors.error) {
          reject(json.errors.error)
        }
      })
    })
  }

  getStatus(status) {
    switch (status) {
      case '1':
        return 'Aguardando pagamento'
      case '2':
        return 'Em análise'
      case '3':
        return 'Paga'
      case '4':
        return 'Disponível'
      case '5':
        return 'Em disputa'
      case '6':
        return 'Devolvida'
      case '7':
        return 'Cancelada'
      case '8':
        return 'Debitado'
      case '9':
        return 'Retenção temporária'
      default:
        return 'Não informado'
    }
  }

  transactionStatus(code) {
    return new Promise((resolve, reject) => {
      request.get(
        { url: `${this.url}/transactions/${code}?token=${this.token}&email=${this.email}` },
        (err, response, body) => {
          if (err) {
            reject(err)
          }
          if (response.statusCode === 200) {
            const json = JSON.parse(xmlParser.toJson(body))
            const status = this.getStatus(json.transaction.status)
            resolve({
              status,
              transaction: json.transaction,
            })
          }
          const json = JSON.parse(xmlParser.toJson(body))
          if (json.errors && json.errors.error) {
            reject(json.errors.error)
          }
        },
      )
    })
  }
}

module.exports = PagSeguro
