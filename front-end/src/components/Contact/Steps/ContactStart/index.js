import React, { Fragment } from 'react'
import { withRouter }      from 'react-router-dom'

const ContactStart = (props) => {
	const nextStep = () => {
		props.history.push("/home/contact/identification")
		props.changeStep(2)
	}
	return (
		<Fragment>
			<h2 className="center">
				Olá, aqui temos uma área para que você possa entrar em
				contato com o casal!
			</h2>
			<button type="button" onClick={() => { nextStep() }}>
				Quero mandar uma mensagem
			</button>
		</Fragment>
	)
}

export default withRouter(ContactStart)