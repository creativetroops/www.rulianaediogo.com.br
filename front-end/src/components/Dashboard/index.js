import React, { Component, Fragment } from 'react'
import { connect }                    from 'react-redux'
import { Redirect }                   from 'react-router-dom'
import { compose }                    from 'redux'
import { firestoreConnect }           from 'react-redux-firebase'
import moment                         from 'moment'
import 'moment/locale/pt-br'

class Dashboard extends Component {
	render () {
		const { auth, contacts, gifts, rsvps } = this.props;
		if (!auth.uid) return <Redirect to="/login" />;
		return <Fragment>
				<h1>Dashboard</h1>
				<h2>Contatos</h2>
				{contacts && contacts.map(contact => {
						return <Fragment key={contact.id}>
								<h3>{contact.name}</h3>
								<p>{contact.email}</p>
								<p>{contact.message}</p>
								<p>{moment(contact.createdAt.toDate()).calendar()}</p>
							</Fragment>;
					})}
				<h2>Presentes dos Convidados</h2>
				{gifts && gifts.map(gift => {
						return <Fragment key={gift.id}>
								<h3>{gift.name}</h3>
								<p>{gift.email}</p>
								<p>{gift.message}</p>
								<p>{gift.value}</p>
								<p>{moment(gift.createdAt.toDate()).calendar()}</p>
							</Fragment>;
					})}
				<h2>Confirmações</h2>
				{rsvps && rsvps.map(rsvp => {
						return <Fragment key={rsvp.id}>
								<h3>{rsvp.name}</h3>
								<p>{rsvp.email}</p>
								<p>{rsvp.message}</p>
								<p>Pessoas: {rsvp.people}</p>
								<p>Crianças: {rsvp.children}</p>
								<p>{moment(rsvp.createdAt.toDate()).calendar()}</p>
							</Fragment>;
					})}
			</Fragment>;
	}
}

const mapStateToProps = (state) => {
	return {
		contacts: state.firestore.ordered.contacts,
		rsvps: state.firestore.ordered.rsvps,
		gifts: state.firestore.ordered.gifts,
		auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: "contacts", orderBy: [["createdAt", "desc"]] },
		{ collection: "rsvps",    orderBy: [["createdAt", "desc"]] },
		{ collection: "gifts",    orderBy: [["createdAt", "desc"]] }
	])
)(Dashboard)