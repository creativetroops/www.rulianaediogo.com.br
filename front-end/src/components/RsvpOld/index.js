import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
  createRsvp,
  startLoadingRsvp,
  clearFinalMessage,
} from '../../store/actions/rsvpActions'

import ComponentMessage from '../../objects/ComponentMessage'
import Animated from '../../objects/Animated'

import StepStart from '../Steps/StepStart'
import StepIdentification from '../Steps/StepIdentification'
import StepList from '../Steps/StepList'
import StepMessage from '../Steps/StepMessage'
import StepFinal from '../Steps/StepFinal'

const initialValues = {
  errorMsg: '',
  name: '',
  email: '',
  areaCode: '',
  phone: '',
  peopleList: [],
  childrenList: [],
  message: '',
  step: 1,
  steps: 5,
}

class Rsvp extends Component {
  state = initialValues

  checkPath = () => {
    const path = this.props.history.location.pathname
    if (path === '/home' || path.includes('/home/rsvp/')) return true
    return false
  }

  changeStep = (step) => {
    this.setState({ step })
  }

  changeError = (errorMsg) => {
    this.setState({ errorMsg })
  }

  setLists = (peopleList, childrenList) => {
    this.setState({
      peopleList,
      childrenList,
    })
  }

  getFormValidation = () => ({
    name: Yup.string().required('Precisamos saber o seu nome!'),
    email: Yup.string()
      .email('Epa, parece que o email que você digitou não é válido.')
      .required('Você precisa digitar um e-mail :('),
    message: Yup.string().required(
      'E qual é a mensagem que você deseja enviar?',
    ),
    areaCode: Yup.string().required('Digite o código de área'),
    phone: Yup.string().required('Digite o número do telefone'),
  })

  validation = () => Yup.object().shape(this.getFormValidation())

  clearFinalMessage = () => {
    this.props.clearFinalMessage()
  }

  handleSubmit = (values, { resetForm }) => {
    this.setState(values)
    this.props.startLoadingRsvp()
    this.props.createRsvp(this.state)
    resetForm()
  }

  render() {
    const { finalMessage, loadingRsvp } = this.props
    return (
      <Fragment>
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
            <Fragment>
              {this.checkPath() && (
                <Form>
                  <h2>Confirme por Gentileza sua Presença</h2>
                  <h4>
                    Passo: {this.state.step} de {this.state.steps}
                  </h4>
                  <Animated>
                    <Route
                      exact
                      path="/home"
                      render={() => (
                        <StepStart
                          title="Confirme aqui a sua presença, até o dia xxx"
                          buttonNext="Quero confirmar minha presença"
                          nextPath="/home/rsvp/identification"
                          step={1}
                          currentStep={this.state.step}
                          changeStep={this.changeStep}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/home/rsvp/identification"
                      render={() => (
                        <StepIdentification
                          title="Precisamos saber algumas coisas sobre você!"
                          buttonNext="Próximo"
                          buttonPrev="Anterior"
                          nextPath="/home/rsvp/list"
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
                          havePhone={true}
                          errorStepMessage="Tem certeza que preencheu todas as informações?"
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/home/rsvp/list"
                      render={() => (
                        <StepList
                          title="E qual é a sua mensagem?"
                          buttonNext="Próximo"
                          buttonPrev="Anterior"
                          nextPath="/home/rsvp/message"
                          prevPath="/home/rsvp/identification"
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
                          peopleList={this.state.peopleList}
                          childrenList={this.state.childrenList}
                          setLists={(peopleList, childrenList) => {
                            this.setLists(peopleList, childrenList)
                          }}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/home/rsvp/message"
                      render={() => (
                        <StepMessage
                          title="E qual é a sua mensagem?"
                          buttonNext="Próximo"
                          buttonPrev="Anterior"
                          nextPath="/home/rsvp/final"
                          prevPath="/home/rsvp/list"
                          step={4}
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
                      path="/home/rsvp/final"
                      render={() => (
                        <StepFinal
                          title="Prontinho..."
                          buttonNext="Concluir"
                          buttonPrev="Anterior"
                          step={5}
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
                    {loadingRsvp ? <h1>Carregando...</h1> : null}
                  </ComponentMessage>
                  <ComponentMessage>
                    {finalMessage && <h1>{finalMessage}</h1>}
                  </ComponentMessage>
                </Form>
              )}
            </Fragment>
          )}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loadingRsvp: state.rsvps.loadingRsvp,
  finalMessage: state.rsvps.finalMessage,
})

const mapDispatchToProps = dispatch => ({
  createRsvp: rsvp => dispatch(createRsvp(rsvp)),
  startLoadingRsvp: () => dispatch(startLoadingRsvp()),
  clearFinalMessage: () => dispatch(clearFinalMessage()),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Rsvp),
)
