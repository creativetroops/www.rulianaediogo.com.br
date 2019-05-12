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
      <div className="summary-box">
        <img
          className="summary-icon"
          src="/assets/images/dashboard/red-dashboard-message.svg"
          alt="Imagem de Decoração Mensagens"
        />
        <div className="summary-number">{messages.length}</div>
        <h3 className="summary-title">Mensagens</h3>
      </div>
      <div className="summary-box">
        <img
          className="summary-icon"
          src="/assets/images/dashboard/red-dashboard-billet.svg"
          alt="Imagem de Decoração Boletos"
        />
        <div className="summary-number">{billets.length}</div>
        <h3 className="summary-title">Boletos</h3>
      </div>
      <div className="summary-box">
        <img
          className="summary-icon"
          src="/assets/images/dashboard/red-dashboard-deposit.svg"
          alt="Imagem de Decoração Depóstios"
        />
        <div className="summary-number">{deposits.length}</div>
        <h3 className="summary-title">Depóstios</h3>
      </div>
      <div className="summary-box">
        <img
          className="summary-icon"
          src="/assets/images/dashboard/red-dashboard-rsvp.svg"
          alt="Imagem de Decoração Confirmações"
        />
        <div className="summary-number">{rsvps.length}</div>
        <h3 className="summary-title">Confirmações</h3>
      </div>
      <div className="summary-box">
        <img
          className="summary-icon"
          src="/assets/images/dashboard/red-dashboard-user.svg"
          alt="Imagem de Decoração Usuários"
        />
        <div className="summary-number">{users.length}</div>
        <h3 className="summary-title">Usuários</h3>
      </div>
      <div className="summary-box">
        <img
          className="summary-icon"
          src="/assets/images/dashboard/red-dashboard-billet.svg"
          alt="Imagem de Valor Boletos"
        />
        <div className="summary-number">R$ {totalBillet(billets).replace('.', ',')}</div>
        <h3 className="summary-title">Valor Boletos</h3>
      </div>
      <div className="summary-box">
        <img
          className="summary-icon"
          src="/assets/images/dashboard/red-dashboard-deposit.svg"
          alt="Imagem de Decoração Valor Depósitos"
        />
        <div className="summary-number">R$ {totalDeposit(deposits).replace('.', ',')}</div>
        <h3 className="summary-title">Valor Depósitos</h3>
      </div>
      <div className="summary-box">
        <img
          className="summary-icon"
          src="/assets/images/dashboard/red-dashboard-billet.svg"
          alt="Imagem de Decoração Valor Total"
        />
        <div className="summary-number">R$ {total(deposits, billets).replace('.', ',')}</div>
        <h3 className="summary-title">Valor Total</h3>
      </div>
    </StyledSummary>
  )
}

export default Summary
