import React, { Fragment } from 'react'

const Summary = ({
  messages, billets, deposits, rsvps, users,
}) => {
  const totalBillet = billetsBase => billetsBase.reduce((count, item) => count + parseFloat(item.value), 0).toFixed(2)
  const totalDeposit = depositsBase => depositsBase.reduce((count, item) => count + parseFloat(item.value), 0).toFixed(2)
  return (
    <Fragment>
      <h2>Resumos</h2>
      <p>Total de mensagens: {messages.length}</p>
      <p>Total de boletos: {billets.length}</p>
      <p>Total de depósitos: {deposits.length}</p>
      <p>Total de confirmações: {rsvps.length}</p>
      <p>Total de usuários: {users.length}</p>
      <p>Valor total arrecadado com boletos: R$ {totalBillet(billets)}</p>
      <p>Valor total arrecadado com depósitos: R$ {totalDeposit(deposits)}</p>
    </Fragment>
  )
}

export default Summary
