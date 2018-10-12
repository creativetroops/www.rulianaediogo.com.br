import React, { Fragment } from 'react'
import { withRouter }      from 'react-router-dom'

const ContactMessage = (props) => {
	const nextStep = (errors) => {
		if (!errors.message)
			props.history.push("/home/contact/thanks")
	}
	return (
		<Fragment>
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
			<button type="button" onClick={() => {nextStep(props.errors)}}>Continuar</button>
		</Fragment>
	)
}

export default withRouter(ContactMessage)