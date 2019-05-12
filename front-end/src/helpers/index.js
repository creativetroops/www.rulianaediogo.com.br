const isValidEmail = str => !str.match(/^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/)

const isValidName = (str) => {
  if (str.length > 0) {
    return str.match(/^\d+$/) || str.length < 3
  }
  return true
}

const isValidMessage = str => str.length < 1

const isValidPhone = str => !str.match(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/)

const isValidDate = str => !str.match(/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/)

const isValidValue = str => !(str.match(/^[0-9]+(.[0-9]{1,2})?$/gm) || str.match(/^[0-9]+(,[0-9]{1,2})?$/gm))

const isValidCpf = (str) => {
  let sum
  let remainder
  sum = 0
  const cpf = str.replace(/\D/g, '')

  if (cpf === '00000000000') {
    return true
  }

  for (let i = 1; i <= 9; i += 1) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i)
    remainder = (sum * 10) % 11
  }

  if (remainder === 10 || remainder === 11) {
    remainder = 0
  }
  if (remainder !== parseInt(cpf.substring(9, 10), 10)) {
    return true
  }

  sum = 0

  for (let i = 1; i <= 10; i += 1) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i)
    remainder = (sum * 10) % 11
  }

  if (remainder === 10 || remainder === 11) {
    remainder = 0
  }
  if (remainder !== parseInt(cpf.substring(10, 11), 10)) {
    return true
  }

  return false
}

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

const dateMask = (str) => {
  let date = str.replace(/\D/g, '')
  date = date.replace(/(\d{2})(\d)/, '$1/$2')
  date = date.replace(/(\d{2})(\d)/, '$1/$2')
  date = date.replace(/(\d{2})(\d{2})$/, '$1$2')
  date = date.substring(0, 10)
  return date
}

const cpfMask = (str) => {
  if (str.length === 15) {
    return str.substring(0, 14)
  }
  let cpf = str.replace(/\D/g, '')
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  return cpf
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

const validateCpf = (rule, value, callback) => {
  if (!value) {
    callback('CPF is empty')
    return
  }
  const err = []
  if (isValidCpf(value)) {
    err.push('Not valid cpf')
  }
  callback(err)
}

const validateValue = (rule, value, callback) => {
  if (!value) {
    callback('Value is empty')
    return
  }
  const err = []
  if (isValidValue(value)) {
    err.push('Not valid value')
  }
  callback(err)
}

const validateDate = (rule, value, callback) => {
  if (!value) {
    callback('Date is empty')
    return
  }
  const err = []
  if (isValidDate(value)) {
    err.push('Wrong date')
  }
  callback(err)
}

export {
  validateEmail,
  validateName,
  validateMessage,
  validatePhone,
  validateDate,
  validateCpf,
  validateValue,
  phoneMask,
  cpfMask,
  dateMask,
}
