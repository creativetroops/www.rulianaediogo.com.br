import React, { Fragment } from 'react'
import moment              from 'moment'
import 'moment/locale/pt-br'

const ListUser = ({ users }) => {
	return (
		<Fragment>
			<h2>Usuários</h2>
			{ console.log(users) }
			{users && users.map(user => {
				return <Fragment key={user.id}>
					<h3>{user.firstName} {user.lastName}</h3>
					<p>{user.email}</p>
					<p>Criado em: {moment(user.createdAt.toDate()).calendar()}</p>
				</Fragment>;
			})}
		</Fragment>
	)
}

export default ListUser