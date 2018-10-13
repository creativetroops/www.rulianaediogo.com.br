import React, { Fragment } from 'react'
import { withRouter }      from 'react-router-dom'

const ContactIdentification = (props) => {
	const prevStep = () => {
		props.history.push("/home")
		props.changeStep(1)
		props.changeError('')
	};
	const nextStep = (props) => {
		if( props.values.name  !== "" &&
			props.values.email !== "" &&
			!props.errors.name &&
			!props.errors.email
			){
				props.history.push("/home/contact/message")
				props.changeStep(3)
				props.changeError('')
			}
		else{
			props.changeError('Oops, será que você não esqueceu de preencher o nome ou o email corretamente?')
		}
	}
	return (
		<Fragment>
			<h5 className="center">Muito bem! Entre em contato com o casal</h5>
			<input
				id="name"
				placeholder = "Digite o seu nome"
				type        = "text"
				value       = {props.values.name}
				onChange    = {props.handleChange}
				onBlur      = {props.handleBlur}
				className   = {props.errors.name && props.touched.name ? "error" : ""} />
			{ props.errors.name && props.touched.name &&
				<div className="error-message">
					{props.errors.name}
				</div>
			}
			<input
				id          = "email"
				placeholder = "Digite o seu e-mail"
				type        = "text"
				value       = {props.values.email}
				onChange    = {props.handleChange}
				onBlur      = {props.handleBlur}
				className   = {props.errors.email && props.touched.email ? "error" : ""} />
			{ props.errors.email && props.touched.email &&
				<div className="error-message">
					{props.errors.email}
				</div>
			}
			<button type="button" onClick={() => { prevStep() }}     >Voltar</button>
			<button type="button" onClick={() => { nextStep(props) }}>Continuar</button>
		</Fragment>
	)
}

export default withRouter(ContactIdentification)