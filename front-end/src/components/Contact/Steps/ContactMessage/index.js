import React, { Fragment }      from 'react'
import { withRouter, Redirect } from 'react-router-dom'

const ContactMessage = (props) => {
	const prevStep = () => {
		props.history.push("/home/contact/identification")
		props.changeStep(2)
		props.changeError('')
	};
	const nextStep = (props) => {
		if (props.values.message !== "" &&
			!props.errors.message
		) {
			props.history.push("/home/contact/thanks")
			props.changeStep(4)
			props.changeError('')
		}
		else {
			props.changeError('Oops, será que você não esqueceu de preencher a mensagem corretamente?')
		}
	}
	return (
		<Fragment>
			{props.values.name === '' && props.values.email === '' && <Redirect to="/home/" />}
			<h5 className="center">E qual a sua mensagem?</h5>
			<textarea
				id          = "message"
				placeholder = "Digite a sua mensagem"
				value       = {props.values.message}
				onChange    = {props.handleChange}
				onBlur      = {props.handleBlur}
				className   = {props.errors.message && props.touched.message ? "error" : ""}></textarea>
			{ props.errors.message  && props.touched.message &&
				<div className="error-message">
					{props.errors.message}
				</div>
			}
			<button type="button" onClick={() => { prevStep() }}     >Voltar</button>
			<button type="button" onClick={() => { nextStep(props) }}>Continuar</button>
		</Fragment>
	)
}

export default withRouter(ContactMessage)