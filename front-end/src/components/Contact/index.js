import React, { Component, Fragment }         from 'react'
import { connect }                            from 'react-redux'
import {
	createContact,
	startLoadingContact,
	clearContactMessage }                     from '../../store/actions/contactActions'
import { Route, withRouter }                  from 'react-router-dom'
import { Formik, Form }                       from 'formik'
import * as Yup                               from 'yup'
import { AnimatedSwitch }                     from 'react-router-transition'
import ReactCSSTransitionGroup                from 'react-addons-css-transition-group'

import ContactStart          from './Steps/ContactStart'
import ContactIdentification from './Steps/ContactIdentification'
import ContactMessage        from './Steps/ContactMessage'
import ContactThanks         from './Steps/ContactThanks'

import './contact.css'

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
	clearContactMessage = () => {
		this.props.clearContactMessage()
	}
	handleSubmit = (values, { resetForm }) => {
		this.setState(values)
		this.props.startLoadingContact()
		this.props.createContact(this.state)
		resetForm()
	}
	render(){
		const { loadingContact, contactMessage } = this.props;
		return (
			<Fragment>
				<Formik
					initialValues    = {initialValues}
					validationSchema = {this.validation()}
					onSubmit={(values, actions) => { this.handleSubmit(values, actions)} }
					render           = { ({ values, touched, errors, dirty, isSubmitting, handleSubmit, handleChange, handleBlur, handleReset }) =>
					(
						<Form className="white">
							<div className="container">
								<h1>Entre em Contato</h1>
								<Fragment>
									<h4>Passo: {this.state.step} de {this.state.steps}</h4>
										<AnimatedSwitch
											atEnter   = {{ opacity: 0 }}
											atLeave   = {{ opacity: 1 }}
											atActive  = {{ opacity: 1 }}
											className = "switch-wrapper"
										>
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
												changeStep          = {this.changeStep}
												changeError         = {this.changeError}
												clearContactMessage = {this.clearContactMessage}
												values              = {values}
												handleChange        = {handleChange}
												handleBlur          = {handleBlur}
												errors              = {errors}
												touched             = {touched} />}
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
									</AnimatedSwitch>
									<div className="error-box">
										<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
											{this.state.errorMsg && <div className="error-message">{this.state.errorMsg}</div>}
										</ReactCSSTransitionGroup>
									</div>
									<div className="error-box">
										<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
											{loadingContact ? <h1>Carregando...</h1> : null}
										</ReactCSSTransitionGroup>
									</div>
									<div className="error-box">
										<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
											{contactMessage && <h2>{contactMessage}</h2>}
										</ReactCSSTransitionGroup>
									</div>
								</Fragment>
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
		startLoadingContact: () => dispatch(startLoadingContact()),
		clearContactMessage: () => dispatch(clearContactMessage())
	 }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contact))