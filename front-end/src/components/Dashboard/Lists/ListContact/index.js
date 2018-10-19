import React, { Fragment } from 'react'
import moment              from 'moment'
import 'moment/locale/pt-br'

const ListContact = ({ contacts }) => {
	return (
		<Fragment>
			<h2>Contatos</h2>
			{contacts && contacts.map(contact => {
				return <Fragment key={contact.id}>
						<h3>{contact.name}</h3>
						<p>{contact.email}</p>
						<p>{contact.message}</p>
						<p>{moment(contact.createdAt.toDate()).calendar()}</p>
					</Fragment>
			})}
		</Fragment>
	)
}

export default ListContact