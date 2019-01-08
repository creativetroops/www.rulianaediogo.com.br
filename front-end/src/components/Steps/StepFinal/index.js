import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import Title from '../../../objects/Title'
import Button from '../../../objects/Button'

class StepFinal extends Component {
  prevStep = () => {
    this.props.changeStep(this.props.step - 1)
    this.props.history.push(this.props.prevPath)
    this.props.changeError('')
  }

  nextStep = () => {
    this.props.changeStep(1)
    this.props.handleSubmit()
    this.props.history.push('/home')
  }

  componentDidMount() {
    if (this.props.step !== this.props.currentStep) this.props.history.push('/home')
  }

  render() {
    return (
      <Fragment>
        <Title>{this.props.title}</Title>
        <h4>Confira as informações:</h4>
        {this.props.values.name && <p>Nome: {this.props.values.name}</p>}
        {this.props.values.email && <p>Email: {this.props.values.email}</p>}
        {this.props.values.message && <p>Mensagem: {this.props.values.message}</p>}
        {this.props.values.areaCode && <p>DDD: {this.props.values.areaCode}</p>}
        {this.props.values.phone && <p>Telefone: {this.props.values.phone}</p>}
        {this.props.values.cpfCnpj && <p>Cpf/Cnpj: {this.props.values.cpfCnpj}</p>}
        {this.props.values.birthDate && <p>Data de Aniversário: {this.props.values.birthDate}</p>}
        {this.props.values.value && <p>Valor: {this.props.values.value}</p>}
        {this.props.values.peopleList && (
          <Fragment>
            <h4>Lista de Pessoas</h4>
            <ul>
              {this.props.values.peopleList.map((people, index) => (
                <li key={index}>{people}</li>
              ))}
            </ul>
          </Fragment>
        )}
        {this.props.values.childrenList && (
          <Fragment>
            <h4>Lista de Crianças</h4>
            <ul>
              {this.props.values.childrenList.map((child, index) => (
                <li key={index}>{child}</li>
              ))}
            </ul>
          </Fragment>
        )}
        <Button
          onClick={() => {
            this.prevStep()
          }}
        >
          {this.props.buttonPrev}
        </Button>
        <Button
          onClick={() => {
            this.nextStep()
          }}
        >
          {this.props.buttonNext}
        </Button>
      </Fragment>
    )
  }
}

export default withRouter(StepFinal)
