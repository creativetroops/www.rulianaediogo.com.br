import React, { Component } from 'react'
import { connect }          from 'react-redux';
import { createUser }       from '../../../../store/actions/authActions';

class CreateUser extends Component {
	state = {
		email     : '',
		password  : '',
		firstName : '',
		lastName  : '',
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createUser(this.state)
	}
	render() {
		const { authError } = this.props
		return (
			<form className="white" onSubmit={this.handleSubmit}>
				<div className="row">
					<h5 className="grey-text text-darken-3">
						Sign Up
					</h5>
				</div>
				<div className="input-field">
					<label htmlFor="firstName">Nome</label>
					<input type="text" id="firstName" onChange={this.handleChange} />
				</div>
				<div className="input-field">
					<label htmlFor="lastName">Sobrenome</label>
					<input type="text" id="lastName" onChange={this.handleChange} />
				</div>
				<div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" onChange={this.handleChange} />
				</div>
				<div className="input-field">
					<label htmlFor="password">Senha</label>
					<input type="password" id="password" onChange={this.handleChange} />
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">
						Sign Up
					</button>
					<div className="center red-text">
						{authError ? <p>{authError}</p> : null}
					</div>
				</div>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		authError : state.auth.authError
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createUser: (creds) => dispatch(createUser(creds))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)