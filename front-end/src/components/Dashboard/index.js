import React, { Component }            from 'react'
import { connect }                     from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom';
import { compose }                     from 'redux'
import { firestoreConnect }            from 'react-redux-firebase'

import Animated    from '../../objects/Animated'

import Summary     from './Summary'
import ListContact from './Lists/ListContact'
import ListGift    from './Lists/ListGift'
import ListRsvp    from './Lists/ListRsvp'

import Button      from '../../objects/Button'

class Dashboard extends Component {
	state = {
		path : '/'
	}
	changeRoute = (path) => {
		if(path !== this.state.path){
			this.props.history.push(`/dashboard/${path}`)
			this.setState({ path })
		}
	}
	render () {
		const { auth, contacts, gifts, rsvps } = this.props;
		if (!auth.uid) return <Redirect to='/login' />;
		return (
			<div className='container'>
				<h1>Dashboard</h1>
				{
					(contacts && gifts && rsvps &&
					<Summary
						contacts = {contacts}
						gifts    = {gifts}
						rsvps    = {rsvps}
					/>
					) || <h2>Carregando</h2>
				}
				<h2>Detalhes</h2>
				<Button onClick={() => this.changeRoute('contacts')}>Contatos</Button>
				<Button onClick={() => this.changeRoute('gifts')}>Presentes</Button>
				<Button onClick={() => this.changeRoute('rsvps')}>Confirmações</Button>
				<Animated>
					<Route
						exact
						path='/dashboard'
						render={() => (
							<h1>Selecione uma opção para ver seus detalhes.</h1>
						)}
					/>
					<Route
						exact
						path='/dashboard/contacts'
						render={() => (
							<ListContact contacts={contacts} />
						)}
					/>
					<Route
						exact
						path='/dashboard/gifts'
						render={() => (
							<ListGift gifts={gifts} />
						)}
					/>
					<Route
						exact
						path='/dashboard/rsvps'
						render={() => (
							<ListRsvp rsvps={rsvps} />
						)}
					/>
				</Animated>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		contacts : state.firestore.ordered.contacts,
		rsvps    : state.firestore.ordered.rsvps,
		gifts    : state.firestore.ordered.gifts,
		auth     : state.firebase.auth
	}
}

export default withRouter(compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'contacts', orderBy: [['createdAt', 'desc']] },
		{ collection: 'rsvps',    orderBy: [['createdAt', 'desc']] },
		{ collection: 'gifts',    orderBy: [['createdAt', 'desc']] }
	])
)(Dashboard))