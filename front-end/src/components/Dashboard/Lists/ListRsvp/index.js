import React, { Fragment } from 'react'
import moment              from 'moment'
import 'moment/locale/pt-br'

const ListRsvp = ({ rsvps }) => {
	return (
		<Fragment>
			<h2>Confirmações</h2>
			{rsvps && rsvps.map(rsvp => {
				return <Fragment key={rsvp.id}>
					<h3>{rsvp.name}</h3>
					<p>{rsvp.email}</p>
					<p>{rsvp.message}</p>
					<h4>Lista de Pessoas</h4>
					<ul>
						{rsvp.peopleList.map((people, index) => (
							<li key={index}>{people}</li>
						))}
					</ul>
					<h4>Lista de Crianças</h4>
					<ul>
						{rsvp.childrenList.map((child, index) => (
							<li key={index}>{child}</li>
						))}
					</ul>
					<p>{moment(rsvp.createdAt.toDate()).calendar()}</p>
				</Fragment>;
			})}
		</Fragment>
	)
}

export default ListRsvp