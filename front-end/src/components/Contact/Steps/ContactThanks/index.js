import React, { Fragment }      from 'react'
import { withRouter, Redirect } from 'react-router-dom'

const ContactThanks = (props) => {
	const prevStep = () => {
		props.history.push("/home/contact/message")
		props.changeStep(3)
		props.changeError('')
	}
	const nextStep = (props) => {
		if (props.values.name    !== "" &&
			props.values.email   !== "" &&
			props.values.message !== "" &&
			!props.errors.name  &&
			!props.errors.email &&
			!props.errors.message
		) {
			props.history.push("/home")
			props.changeStep(1)
			props.changeError('')
			props.handleSubmit()
		}
		else {
			props.changeError('Oops, será que você não esqueceu de preencher alguma coisa?')
		}
	}
	return (
		<Fragment>
			{(props.values.name === '' || props.values.email === '' || props.values.message === '') && <Redirect to="/home/" />}
			<h5>Confira as informações ;)</h5>
			<p>Nome:     {props.values.name}</p>
			<p>Email:    {props.values.email}</p>
			<p>Mensagem: {props.values.message}</p>
			<button type="button" onClick={() => { prevStep() }}     >Voltar</button>
			<button type="button" onClick={() => { nextStep(props) }}>Finalizar</button>
		</Fragment>
	)
}

export default withRouter(ContactThanks)