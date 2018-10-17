import React, { Fragment } from 'react'
import { withRouter }      from 'react-router-dom'

const RsvpStart = (props) => {
	const nextStep = () => {
		props.history.push("/home/rsvp/identification")
		props.changeStep(2)
	}
	return (
		<Fragment>
			<h2 className="center">
				Olá, essa é a área para que você confirme a sua presença no Casamento.
			</h2>
			<button type="button" onClick={() => { nextStep() }}>
				Quero confirmar minha presença
			</button>
		</Fragment>
	)
}

export default withRouter(RsvpStart)