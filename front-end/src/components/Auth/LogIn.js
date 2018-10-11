import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { logIn }            from '../../store/actions/authActions'
import { Redirect }         from 'react-router-dom'

class LogIn extends Component {
	state = {
		email    : "",
		password : ""
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.logIn(this.state);
	};
	render() {
		const { auth, authError } = this.props;
		if (auth.uid) return <Redirect to="/dashboard" />;
		return (
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<div className="row">
						<h5 className="grey-text text-darken-3">Sign In</h5>
					</div>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							onChange={this.handleChange}
						/>
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							onChange={this.handleChange}
						/>
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">
							Login
						</button>
						<div className="center red-text">
							{authError ? <p>{authError}</p> : null}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authError : state.auth.authError,
		auth      : state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logIn: (credentials) => dispatch(logIn(credentials))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)