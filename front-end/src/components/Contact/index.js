import React, { Component, Fragment }         from 'react'
import { connect }                            from 'react-redux'
import { createContact,	startLoadingContact } from '../../store/actions/contactActions'
import { Switch, Route, withRouter }          from 'react-router-dom'
import { Formik, Form }                       from 'formik'
import * as Yup                               from 'yup'

import ContactStart          from './Steps/ContactStart'
import ContactIdentification from './Steps/ContactIdentification'
import ContactMessage        from './Steps/ContactMessage'
import ContactThanks         from './Steps/ContactThanks'

const initialValues = {
	name     : '',
	email    : '',
	message  : '',
	step     : 1,
	steps    : 4,
	errorMsg : ''
}

class Contact extends Component{
	state = initialValues
	changeStep = (step) => {
		this.setState({ step })
	}
	changeError = (errorMsg) => {
		this.setState({ errorMsg })
	}
	getFormValidation = () => {
		return {
			name    : Yup
						.string()
						.required('Precisamos saber o seu nome!'),
			email   : Yup
						.string()
						.email('Epa, parece que o email que você digitou não é válido.')
						.required('Você precisa digitar um e-mail :('),
			message : Yup
						.string()
						.required('E qual é a mensagem que você deseja enviar?')
		}
	}
	validation = () => {
		return Yup.object().shape(this.getFormValidation())
	}
	handleSubmit = (values) => {
		this.setState(values)
		this.props.startLoadingContact()
		this.props.createContact(this.state)
	}
	render(){
		const { loadingContact } = this.props
		return (
			<Fragment>
				<Formik
					initialValues    = {initialValues}
					validationSchema = {this.validation()}
					onSubmit         = { (values) => { this.handleSubmit(values)} }
					render           = { ({ values, touched, errors, dirty, isSubmitting, handleSubmit, handleChange, handleBlur, handleReset }) =>
					(
						<Form className="white">
							<div className="container">
								<h1>Entre em Contato</h1>
								{!loadingContact ? (
									<Fragment>
										<h4>Passo: {this.state.step} de {this.state.steps}</h4>
										<Switch>
											<Route exact path="/home"
												render={ () =>
												<ContactStart
													changeStep   = {this.changeStep}
													changeError  = {this.changeError}
 													values       = {values}
													handleChange = {handleChange}
													handleBlur   = {handleBlur}
													errors       = {errors}
													touched      = {touched} />}
											/>
											<Route exact path="/home/contact/identification"
												render={ () =>
												<ContactIdentification
													changeStep   = {this.changeStep}
													changeError={this.changeError}
													values       = {values}
													handleChange = {handleChange}
													handleBlur   = {handleBlur}
													errors       = {errors}
													touched      = {touched} />}
											/>
											<Route exact path="/home/contact/message"
												render={ () =>
												<ContactMessage
													changeStep   = {this.changeStep}
													changeError  = {this.changeError}
													values       = {values}
													handleChange = {handleChange}
													handleBlur   = {handleBlur}
													errors       = {errors}
													touched      = {touched} />}
											/>
											<Route exact path="/home/contact/thanks"
												render={ () =>
												<ContactThanks
													changeStep   = {this.changeStep}
													changeError  = {this.changeError}
													handleSubmit = {handleSubmit}
													values       = {values}
													handleChange = {handleChange}
													handleBlur   = {handleBlur}
													errors       = {errors}
													touched      = {touched} />}
											/>
										</Switch>
										{this.state.errorMsg && <div className="error-message">{this.state.errorMsg}</div>}
									</Fragment>
								) : (
									<h5>Carregando...</h5>
								)}
							</div>
						</Form>
					)}
				/>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loadingContact: state.contacts.loadingContact,
		contactMessage: state.contacts.contactMessage
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createContact: contact  => dispatch(createContact(contact)),
		startLoadingContact: () => dispatch(startLoadingContact())
	 }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contact))