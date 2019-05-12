import React from 'react'
import StyledSummary from './styles'

const Summary = ({
  messages, billets, deposits, rsvps, users,
}) => {
  const totalBillet = billetsBase => billetsBase.reduce((count, item) => count + parseFloat(item.value), 0).toFixed(2)
  const totalDeposit = depositsBase => depositsBase.reduce((count, item) => count + parseFloat(item.value), 0).toFixed(2)
  const total = (depositsBase, billetsBase) => {
    const depositTotal = depositsBase.reduce((count, item) => count + parseFloat(item.value), 0)
    const billetTotal = billetsBase.reduce((count, item) => count + parseFloat(item.value), 0)
    return (depositTotal + billetTotal).toFixed(2)
  }
  return (
    <StyledSummary>
      <div class="summary-box">
        <img
          class="summary-icon"
          src="/assets/images/red-message-icon.svg"
          alt="Imagem de Decoração Mensagens"
        />
        <div class="summary-number">{messages.length}</div>
        <h3 class="summary-title">Mensagens</h3>
      </div>
      <div class="summary-box">
        <img
          class="summary-icon"
          src="/assets/images/red-message-icon.svg"
          alt="Imagem de Decoração Boletos"
        />
        <div class="summary-number">{billets.length}</div>
        <h3 class="summary-title">Boletos</h3>
      </div>
      <div class="summary-box">
        <img
          class="summary-icon"
          src="/assets/images/red-message-icon.svg"
          alt="Imagem de Decoração Depóstios"
        />
        <div class="summary-number">{deposits.length}</div>
        <h3 class="summary-title">Depóstios</h3>
      </div>
      <div class="summary-box">
        <img
          class="summary-icon"
          src="/assets/images/red-message-icon.svg"
          alt="Imagem de Decoração Confirmações"
        />
        <div class="summary-number">{rsvps.length}</div>
        <h3 class="summary-title">Confirmações</h3>
      </div>
      <div class="summary-box">
        <img
          class="summary-icon"
          src="/assets/images/red-message-icon.svg"
          alt="Imagem de Decoração Usuários"
        />
        <div class="summary-number">{users.length}</div>
        <h3 class="summary-title">Usuários</h3>
      </div>
      <div class="summary-box">
        <img
          class="summary-icon"
          src="/assets/images/red-message-icon.svg"
          alt="Imagem de Valor Boletos"
        />
        <div class="summary-number">R$ {totalBillet(billets).replace('.', ',')}</div>
        <h3 class="summary-title">Valor Boletos</h3>
      </div>
      <div class="summary-box">
        <img
          class="summary-icon"
          src="/assets/images/red-message-icon.svg"
          alt="Imagem de Decoração Valor Depósitos"
        />
        <div class="summary-number">R$ {totalDeposit(deposits).replace('.', ',')}</div>
        <h3 class="summary-title">Valor Depósitos</h3>
      </div>
      <div class="summary-box">
        <img
          class="summary-icon"
          src="/assets/images/red-message-icon.svg"
          alt="Imagem de Decoração Valor Total"
        />
        <div class="summary-number">R$ {total(deposits, billets).replace('.', ',')}</div>
        <h3 class="summary-title">Valor Total</h3>
      </div>
    </StyledSummary>
  )
}

export default Summary
