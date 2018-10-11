import React, { Component, Fragment}    from 'react'
import { connect }                      from 'react-redux'
import { createRsvp, startLoadingRsvp } from '../../store/actions/rsvpActions'

class Rsvp extends Component {
	state = {
		name          : 'Mario Sergio',
		email         : 'batistamariosergio@gmail.com',
		area_code     : '45',
		phone         : '31322956',
		people        : 2,
		children      : 0,
		people_list   : ['Mario Sergio', 'Isabel Cristina José Teixeira Batista'],
		children_list : '',
		message       : 'Parabéns aos noivos!',
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleClick = () => {
		this.props.startLoadingRsvp()
		this.props.createRsvp(this.state)
	}
	render () {
		const { rsvpMessage, loadingRsvp } = this.props;
		return <Fragment>
				<div className="container">
					<form className="white">
						<div className="row">
							<h5 className="grey-text text-darken-3">
								Rsvp
							</h5>
							<p>Confirme aqui a sua presença</p>
						</div>
						<div className="input-field">
							<label htmlFor="name">Nome</label>
						<input type="text" id="name" onChange={this.handleChange} value="Mario Sergio" disabled={loadingRsvp ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} value="batistamariosergio@gmail.com" disabled={loadingRsvp ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="area_code">
								Código de Área do Telefone
							</label>
						<input type="text" id="area_code" onChange={this.handleChange} value="43" disabled={loadingRsvp ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="phone">Telefone</label>
						<input type="text" id="phone" onChange={this.handleChange} value="31322956" disabled={loadingRsvp ? 'disabled' : null} />
						</div>
						<div className="range-field">
							<h4>Pessoas: {this.state.people}</h4>
						<input type="range" id="people" min="1" max="10" defaultValue="2" onChange={this.handleChange} disabled={loadingRsvp ? 'disabled' : null} />
						</div>
						<div className="range-field">
							<h4>Crianças: {this.state.children}</h4>
						<input type="range" id="children" min="0" max="10" defaultValue="0" onChange={this.handleChange} disabled={loadingRsvp ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="people_list">
								Lista de Pessoas
							</label>
						<textarea className="materialize-textarea" id="people_list" onChange={this.handleChange} defaultValue="" disabled={loadingRsvp ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="children_list">
								Lista de Crianças
							</label>
						<textarea className="materialize-textarea" id="people_list" onChange={this.handleChange} defaultValue="" disabled={loadingRsvp ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="message">
								Observação adicional
							</label>
						<textarea className="materialize-textarea" id="message" onChange={this.handleChange} defaultValue="Parabéns aos noivos!" disabled={loadingRsvp ? 'disabled' : null} />
						</div>
						<div className="input-field">
							{!loadingRsvp ? (
								<button className="btn pink lighten-1 z-depth-0" onClick={this.handleClick}>
									Confirmar Presença
									</button>
							) : (
									<button className="btn pink lighten-1 z-depth-0" disabled="disabled">
										Aguarde...
									</button>
								)}
							<div className="center red-text">
								{rsvpMessage ? (
									<p>{rsvpMessage}</p>
								) : null}
							</div>
						</div>
					</form>
				</div>
			</Fragment>;
	}
}

const mapStateToProps = (state) => {
	return {
		loadingRsvp: state.rsvps.loadingRsvp,
		rsvpMessage: state.rsvps.rsvpMessage
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createRsvp: rsvp => dispatch(createRsvp(rsvp)),
		startLoadingRsvp: () => dispatch(startLoadingRsvp())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Rsvp)