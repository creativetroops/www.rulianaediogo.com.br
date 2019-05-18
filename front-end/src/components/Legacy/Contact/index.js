import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
  createContact,
  startLoadingContact,
  clearFinalMessage,
} from '../../store/actions/contactActions'

import ComponentMessage from '../../objects/ComponentMessage'
import Animated from '../../objects/Animated'

import StepStart from '../Steps/StepStart'
import StepIdentification from '../Steps/StepIdentification'
import StepMessage from '../Steps/StepMessage'
import StepFinal from '../Steps/StepFinal'

const initialValues = {
  name: '',
  email: '',
  message: '',
  step: 1,
  steps: 4,
  errorMsg: '',
}

class Contact extends Component {
  state = initialValues

  checkPath = () => {
    const path = this.props.history.location.pathname
    if (path === '/home' || path.includes('/home/contact/')) return true
    return false
  }

  changeStep = (step) => {
    this.setState({ step })
  }

  changeError = (errorMsg) => {
    this.setState({ errorMsg })
  }

  getFormValidation = () => ({
    name: Yup.string().required('Precisamos saber o seu nome!'),
    email: Yup.string()
      .email('Epa, parece que o email que você digitou não é válido.')
      .required('Você precisa digitar um e-mail :('),
    message: Yup.string().required('E qual é a mensagem que você deseja enviar?'),
  })

  validation = () => Yup.object().shape(this.getFormValidation())

  clearFinalMessage = () => {
    this.props.clearFinalMessage()
  }

  handleSubmit = (values, { resetForm }) => {
    this.setState(values)
    this.props.startLoadingContact()
    this.props.createContact(this.state)
    resetForm()
  }

  render() {
    const { loadingContact, finalMessage } = this.props
    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={this.validation()}
          onSubmit={(values, actions) => {
            this.handleSubmit(values, actions)
          }}
          render={({
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleSubmit,
            handleChange,
            handleBlur,
            handleReset,
          }) => (
            <>
              {this.checkPath() && (
                <Form>
                  <h1>Entre em Contato</h1>
                  <h4>
                    Passo: {this.state.step} de {this.state.steps}
                  </h4>
                  <Animated>
                    <Route
                      exact
                      path="/home"
                      render={() => (
                        <StepStart
                          title="Olá, aqui temos uma área para que você possa entrar em contato com o casal!"
                          buttonNext="Quero mandar uma mensagem"
                          nextPath="/home/contact/identification"
                          step={1}
                          currentStep={this.state.step}
                          changeStep={this.changeStep}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/home/contact/identification"
                      render={() => (
                        <StepIdentification
                          title="Precisamos saber algumas coisas sobre você!"
                          buttonNext="Próximo"
                          buttonPrev="Anterior"
                          nextPath="/home/contact/message"
                          prevPath="/home"
                          step={2}
                          changeStep={this.changeStep}
                          currentStep={this.state.step}
                          changeError={this.changeError}
                          clearFinalMessage={this.clearFinalMessage}
                          values={values}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          errorStepMessage="Tem certeza que preencheu todas as informações?"
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/home/contact/message"
                      render={() => (
                        <StepMessage
                          title="E qual é a sua mensagem?"
                          buttonNext="Próximo"
                          buttonPrev="Anterior"
                          nextPath="/home/contact/final"
                          prevPath="/home/contact/identification"
                          step={3}
                          changeStep={this.changeStep}
                          currentStep={this.state.step}
                          changeError={this.changeError}
                          values={values}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                          errorStepMessage="Tem certeza que preencheu todas as informações?"
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/home/contact/final"
                      render={() => (
                        <StepFinal
                          title="Prontinho..."
                          buttonNext="Concluir"
                          buttonPrev="Anterior"
                          step={4}
                          changeStep={this.changeStep}
                          currentStep={this.state.step}
                          prevPath="/home/contact/message"
                          changeError={this.changeError}
                          handleSubmit={handleSubmit}
                          values={values}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          errors={errors}
                          touched={touched}
                        />
                      )}
                    />
                  </Animated>
                  <ComponentMessage>
                    {this.state.errorMsg && (
                      <div className="error-message">{this.state.errorMsg}</div>
                    )}
                  </ComponentMessage>
                  <ComponentMessage>
                    {loadingContact ? <h1>Carregando...</h1> : null}
                  </ComponentMessage>
                  <ComponentMessage>{finalMessage && <h1>{finalMessage}</h1>}</ComponentMessage>
                </Form>
              )}
            </>
          )}
        />
      </>
    )
  }
}

const mapStateToProps = state => ({
  loadingContact: state.contacts.loadingContact,
  finalMessage: state.contacts.finalMessage,
})

const mapDispatchToProps = dispatch => ({
  createContact: contact => dispatch(createContact(contact)),
  startLoadingContact: () => dispatch(startLoadingContact()),
  clearFinalMessage: () => dispatch(clearFinalMessage()),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Contact),
)
