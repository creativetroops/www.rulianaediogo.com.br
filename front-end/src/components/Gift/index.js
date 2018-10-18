import React, { Component, Fragment } from 'react'
import { connect }                    from 'react-redux'
import {
	createGift,
	startLoadingGift,
	clearFinalMessage
}                                from '../../store/actions/giftActions'
import { Route, withRouter }     from 'react-router-dom'
import { Formik, Form }          from 'formik'
import * as Yup                  from 'yup'

import ComponentMessage          from '../../objects/ComponentMessage'
import Animated                  from '../../objects/Animated'

import StepStart                 from '../Steps/StepStart'
import StepIdentification        from '../Steps/StepIdentification'
import StepValue                 from '../Steps/StepValue'
import StepMessage               from '../Steps/StepMessage'
import StepFinal                 from '../Steps/StepFinal'

const initialValues = {
	name       : 'Mario Sergio',
	email      : 'diogoctb@gmail.com',
	cpfCnpj    : '70995168849',
	areaCode   : '43',
	phone      : '31322956',
	birthDate  : '24/10/1953',
	value      : '50',
	message    : 'Parabéns aos noivos!',
	senderHash : '',
	step       : 1,
	steps      : 5,
	errorMsg   : ''
}

class Gift extends Component {
	state = initialValues
	checkPath = () =>{
		const path = this.props.history.location.pathname
		if(path === '/home' || path.includes('/home/gift/'))
			return true
		return false
	}
	changeStep = step => {
		this.setState({ step })
	}
	changeError = errorMsg => {
		this.setState({ errorMsg })
	}
	setValue = value => {
		this.setState({ value })
	}
	getFormValidation = () => {
		return {
			name  : Yup.string().required('Precisamos saber o seu nome!'),
			email : Yup.string()
					.email('Epa, parece que o email que você digitou não é válido.')
					.required('Você precisa digitar um e-mail :('),
			message   : Yup.string().required('E qual é a mensagem que você deseja enviar?'),
			areaCode  : Yup.string().required('Digite o código de área'),
			phone     : Yup.string().required('Digite o número do telefone'),
			cpfCnpj   : Yup.string().required('Digite o cpf ou cnpj'),
			birthDate : Yup.string().required('Digite a sua data de nascimento')
		}
	}
	validation = () => {
		return Yup.object().shape(this.getFormValidation())
	}
	clearFinalMessage = () => {
		this.props.clearFinalMessage()
	}
	handleSubmit = (values, { resetForm }) => {
		this.setState(values)
		this.props.startLoadingGift()
		window.PagSeguroDirectPayment.onSenderHashReady((response) => {
			if (response.status !== 'error') {
				this.setState({
					senderHash: response.senderHash
				})
				this.props.createGift(this.state)
			}
		})
		resetForm()
	}
    render () {
		const { finalMessage, loadingGift, feedBack } = this.props
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
						handleReset
					}) => (
						<Fragment>
							{ this.checkPath() &&
								<Form>
									<h2>Presente dos Noivos</h2>
									<h4>
										Passo: {this.state.step} de	{this.state.steps}
									</h4>
									<Animated>
										<Route
											exact
											path="/home"
											render={() => (
												<StepStart
													title       = "Envie um presente para os noivos"
													buttonNext  = "Quero enviar um presente"
													nextPath    = "/home/gift/identification"
													step        = {1}
													currentStep = {this.state.step}
													changeStep  = {this.changeStep}
												/>
											)}
										/>
										<Route
											exact
											path="/home/gift/identification"
											render={() => (
												<StepIdentification
													title             = "Precisamos saber algumas coisas sobre você!"
													buttonNext        = "Próximo"
													buttonPrev        = "Anterior"
													nextPath          = "/home/gift/value"
													prevPath          = "/home"
													step              = {2}
													changeStep        = {this.changeStep}
													currentStep       = {this.state.step}
													changeError       = {this.changeError}
													clearFinalMessage = {this.clearFinalMessage}
													values            = {values}
													handleChange      = {handleChange}
													handleBlur        = {handleBlur}
													errors            = {errors}
													touched           = {touched}
													havePhone         = {true}
													havePayment       = {true}
													errorStepMessage  = "Tem certeza que preencheu todas as informações?"
												/>
											)}
										/>
										<Route
											exact
											path="/home/gift/value"
											render={() => (
												<StepValue
													title            = "Qual valor você deseja enviar?"
													buttonNext       = "Próximo"
													buttonPrev       = "Anterior"
													nextPath         = "/home/gift/message"
													prevPath         = "/home/gift/identification"
													step             = {3}
													changeStep       = {this.changeStep}
													currentStep      = {this.state.step}
													changeError      = {this.changeError}
													values           = {values}
													handleChange     = {handleChange}
													handleBlur       = {handleBlur}
													errors           = {errors}
													touched          = {touched}
													errorStepMessage = "Tem certeza que preencheu todas as informações?"
													setValue         = {(value) => {this.setValue(value)}}
													value            = {this.state.value}
												/>
											)}
										/>
										<Route
											exact
											path="/home/gift/message"
											render={() => (
												<StepMessage
													title            = "E qual é a sua mensagem?"
													buttonNext       = "Próximo"
													buttonPrev       = "Anterior"
													nextPath         = "/home/gift/final"
													prevPath         = "/home/gift/value"
													step             = {4}
													changeStep       = {this.changeStep}
													currentStep      = {this.state.step}
													changeError      = {this.changeError}
													values           = {values}
													handleChange     = {handleChange}
													handleBlur       = {handleBlur}
													errors           = {errors}
													touched          = {touched}
													errorStepMessage = "Tem certeza que preencheu todas as informações?"
												/>
											)}
										/>
										<Route
											exact
											path="/home/gift/final"
											render={() => (
												<StepFinal
													title        = "Prontinho..."
													buttonNext   = "Concluir"
													buttonPrev   = "Anterior"
													step         = {5}
													changeStep   = {this.changeStep}
													currentStep  = {this.state.step}
													prevPath     = "/home/contact/message"
													changeError  = {this.changeError}
													handleSubmit = {handleSubmit}
													values       = {values}
													handleChange = {handleChange}
													handleBlur   = {handleBlur}
													errors       = {errors}
													touched      = {touched}
												/>
											)}
										/>
									</Animated>
									<ComponentMessage>
										{this.state.errorMsg && (
											<div className="error-message">
												{this.state.errorMsg}
											</div>
										)}
									</ComponentMessage>
									<ComponentMessage>
										{loadingGift ? (
											<h1>Carregando...</h1>
										) : null}
									</ComponentMessage>
									<ComponentMessage>
										{finalMessage && (
											<h1>{finalMessage}</h1>
										)}
									</ComponentMessage>
									<ComponentMessage>
										{feedBack && (
											<h1>{JSON.stringify(feedBack)}</h1>
										)}
									</ComponentMessage>
								</Form>
							}
						</Fragment>
					)}
				/>
			</Fragment>
		)
    }
}

const mapStateToProps = (state) => {
	return {
		loadingGift: state.gifts.loadingGift,
		finalMessage: state.gifts.finalMessage,
		feedBack : state.gifts.feedBack
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createGift: gift      => dispatch(createGift(gift)),
		startLoadingGift:  () => dispatch(startLoadingGift()),
		clearFinalMessage: () => dispatch(clearFinalMessage())
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Gift))