import React, { Component, Fragment }         from 'react'
import { connect }                            from 'react-redux'
import { createContact,	startLoadingContact } from '../../store/actions/contactActions'
import { Switch, Route, withRouter }          from 'react-router-dom'
import { Formik, Form }                       from 'formik'
import * as Yup                               from 'yup'

import ContactIdentification from './Steps/ContactIdentification'
import ContactMessage        from './Steps/ContactMessage'
import ContactThanks         from './Steps/ContactThanks'

const initialValues = {
	name    : '',
	email   : '',
	message : '',
	step    : 1
}

class Contact extends Component{
	state = {
		name: '',
		email: '',
		message: '',
		step: 1
	}
	changeStep = (step) => {
		this.setState({ step : step })
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
								{!loadingContact ? (
									<Switch>
										<Route exact path="/home" render={() => <ContactIdentification changeStep={this.changeStep} values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />} />
										<Route exact path="/home/contact/message" render={() => <ContactMessage values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} />} />
										<Route exact path="/home/contact/thanks" render={() => <ContactThanks values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} handleSubmit={handleSubmit} />} />
									</Switch>
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

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
(Contact))

// class Contact extends Component {
// 	state = {
// 		name    : 'Mario Sergio',
// 		email   : 'batistamariosergio@gmail.com',
// 		message : 'Parabéns aos noivos!',
// 	}
// 	handleChange = (e) => {
// 		this.setState({
// 			[e.target.id]: e.target.value
// 		})
// 	}
//     handleClick = () => {
// 		this.props.startLoadingContact()
// 		this.props.createContact(this.state)
//     }
//     render () {
// 		const { contactMessage, loadingContact } = this.props;
//         return <Fragment>
// 				<div className="container">
// 					<form className="white">
// 						<div className="row">
// 							<h5 className="grey-text text-darken-3">
// 								Contato
// 							</h5>
// 							<p>Entre em contato com os noivos!</p>
// 						</div>
// 						<div className="input-field">
// 							<label htmlFor="name">Nome</label>
// 						<input type="text" id="name" onChange={this.handleChange} value="Mario Sergio" disabled={loadingContact ? 'disabled' : null} />
// 						</div>
// 						<div className="input-field">
// 							<label htmlFor="email">Email</label>
// 						<input type="email" id="email" onChange={this.handleChange} value="batistamariosergio@gmail.com" disabled={loadingContact ? 'disabled' : null} />
// 						</div>
// 						<div className="input-field">
// 							<label htmlFor="message">
// 								Mensagem para os Noivos
// 							</label>
// 						<textarea className="materialize-textarea" id="message" onChange={this.handleChange} defaultValue="Parabéns aos noivos!" disabled={loadingContact ? 'disabled' : null} />
// 						</div>
// 						<div className="input-field">
// 							{!loadingContact ? (
// 								<button className="btn pink lighten-1 z-depth-0" onClick={this.handleClick}>
// 									Enviar Mensagem
// 								</button>
// 							) : (
// 								<button className="btn pink lighten-1 z-depth-0" disabled="disabled">
// 									Aguarde...
// 								</button>
// 							)}
// 							<div className="center red-text">
// 								{contactMessage ? (
// 									<p>{contactMessage}</p>
// 								) : null}
// 							</div>
// 						</div>
// 					</form>
// 				</div>
// 			</Fragment>;
//     }
// }

// const mapStateToProps = (state) => {
// 	return {
// 		loadingContact: state.contacts.loadingContact,
// 		contactMessage: state.contacts.contactMessage
// 	}
// }

// const mapDispatchToProps = dispatch => {
// 	return {
// 		createContact: contact  => dispatch(createContact(contact)),
// 		startLoadingContact: () => dispatch(startLoadingContact())
// 	 }
// }

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Contact)