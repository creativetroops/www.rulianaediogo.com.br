import React, { Fragment } from 'react';

const Summary = ({ contacts, gifts, rsvps}) => {
	return (
		<Fragment>
			<h2>Resumos</h2>
			<p>Total de contatos: {contacts.length}</p>
			<p>Total de presentes: {gifts.length}</p>
			<p>Total de confirmações: {rsvps.length}</p>
			{/* <p>Valor total arrecadado: {gifts.reduce((n1, n2))}</p> */}
		</Fragment>
	)
}

export default Summary