import React, { Component }            from 'react'
import { connect }                     from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { compose }                     from 'redux'
import { firestoreConnect }            from 'react-redux-firebase'

import Animated    from '../../objects/Animated'

import Summary     from './Summary'
import ListContact from './Lists/ListContact'
import ListGift    from './Lists/ListGift'
import ListRsvp    from './Lists/ListRsvp'
import ListUser    from './Lists/ListUser'

import CreateUser  from './Creates/CreateUser'

import Button      from '../../objects/Button'

class Dashboard extends Component {
	state = {
		path: ''
	}
	changeRoute = (path) => {
		const pathDash = `/dashboard/${path}`
		if (pathDash !== this.state.path){
			this.setState({ path: pathDash })
			this.props.history.push(pathDash)
		}
	}
	componentDidMount(){
		this.setState({ path: this.props.history.location.pathname })
	}
	render () {
		const { auth, contacts, gifts, rsvps, users } = this.props
		if (!auth.uid) return <Redirect to='/login' />
		return (
			<div className='container'>
				<h1>Dashboard</h1>
				{
					(contacts && gifts && rsvps &&
					<Summary
						contacts = {contacts}
						gifts    = {gifts}
						rsvps    = {rsvps}
						users    = {users}
					/>
					) || <h2>Carregando</h2>
				}
				<h2>Detalhes</h2>
				<Button onClick={() => this.changeRoute('contacts')}>Contatos</Button>
				<Button onClick={() => this.changeRoute('gifts')}>Presentes</Button>
				<Button onClick={() => this.changeRoute('rsvps')}>Confirmações</Button>
				<Button onClick={() => this.changeRoute('users')}>Usuários</Button>
				<h2>Controles</h2>
				<Button onClick={() => this.changeRoute('createUser')}>Criar Administrador</Button>
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
					<Route
						exact
						path='/dashboard/users'
						render={() => (
							<ListUser users={users} />
						)}
					/>
					<Route
						exact
						path='/dashboard/createUser'
						render={() => (
							<CreateUser />
						)}
					/>
				</Animated>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		contacts : state.firestore.ordered.contacts,
		rsvps    : state.firestore.ordered.rsvps,
		gifts    : state.firestore.ordered.gifts,
		users    : state.firestore.ordered.users,
		auth     : state.firebase.auth
	}
}

export default withRouter(compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'users',    orderBy: [['createdAt', 'desc']] },
		{ collection: 'contacts', orderBy: [['createdAt', 'desc']] },
		{ collection: 'rsvps',    orderBy: [['createdAt', 'desc']] },
		{ collection: 'gifts',    orderBy: [['createdAt', 'desc']] },
	])
)(Dashboard))