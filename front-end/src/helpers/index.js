const isValidEmail = str => !str.match(/^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/)

const isValidName = (str) => {
  if (str.length > 0) {
    return str.match(/^\d+$/) || str.length < 3
  }
  return true
}

const isValidMessage = str => str.length < 10

const isValidPhone = str => !str.match(
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
)

const phoneMask = (str) => {
  let phone = str.replace(/\D/g, '')
  phone = phone.replace(/^(\d\d)(\d)/g, '($1) $2')

  if (phone.length < 14) {
    phone = phone.replace(/(\d{4})(\d)/, '$1-$2')
  } else {
    phone = phone.replace(/(\d{5})(\d)/, '$1-$2')
  }
  phone = phone.substring(0, 15)
  return phone
}

const validatePhone = (rule, value, callback) => {
  if (!value) {
    callback('Número vazio')
    return
  }
  const err = []
  if (isValidPhone(value)) {
    err.push('Número errado')
  }
  callback(err)
}

const validateEmail = (rule, value, callback) => {
  if (!value) {
    callback('Email is empty')
    return
  }
  const err = []
  if (isValidEmail(value)) {
    err.push('Not valid e-mail')
  }
  callback(err)
}

const validateName = (rule, value, callback) => {
  if (!value) {
    callback('Name is empty')
    return
  }
  const err = []
  if (isValidName(value)) {
    err.push('Not valid name')
  }
  callback(err)
}

const validateMessage = (rule, value, callback) => {
  if (!value) {
    callback('Message is empty')
    return
  }
  const err = []
  if (isValidMessage(value)) {
    err.push('Not valid message')
  }
  callback(err)
}

export {
  validateEmail,
  validateName,
  validateMessage,
  validatePhone,
  phoneMask,
}
