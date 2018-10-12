import React, { Fragment } from 'react'
import { withRouter }      from 'react-router-dom'

const ContactThanks = (props) => {
	const nextStep = () => {
		props.handleSubmit()
		props.history.push("/home")
	}
	return (
		<Fragment>
			<h5>Confira as informações ;)</h5>
			<p>Nome:     {props.values.name}</p>
			<p>Email:    {props.values.email}</p>
			<p>Mensagem: {props.values.message}</p>
			<button type="button" onClick={() => { nextStep() }}>Finalizar</button>
		</Fragment>
	)
}

export default withRouter(ContactThanks)