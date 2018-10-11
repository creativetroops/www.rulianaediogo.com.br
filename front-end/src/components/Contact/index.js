import React, { Component, Fragment } from 'react'
import { connect }                    from 'react-redux'
import {
	createContact,
	startLoadingContact
} from "../../store/actions/contactActions";

class Contact extends Component {
	state = {
		name    : 'Mario Sergio',
		email   : 'batistamariosergio@gmail.com',
		message : 'Parabéns aos noivos!',
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
    handleClick = () => {
		this.props.startLoadingContact()
		this.props.createContact(this.state)
    }
    render () {
		const { contactMessage, loadingContact } = this.props;
        return <Fragment>
				<div className="container">
					<form className="white">
						<div className="row">
							<h5 className="grey-text text-darken-3">
								Contato
							</h5>
							<p>Entre em contato com os noivos!</p>
						</div>
						<div className="input-field">
							<label htmlFor="name">Nome</label>
						<input type="text" id="name" onChange={this.handleChange} value="Mario Sergio" disabled={loadingContact ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} value="batistamariosergio@gmail.com" disabled={loadingContact ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="message">
								Mensagem para os Noivos
							</label>
						<textarea className="materialize-textarea" id="message" onChange={this.handleChange} defaultValue="Parabéns aos noivos!" disabled={loadingContact ? 'disabled' : null} />
						</div>
						<div className="input-field">
							{!loadingContact ? (
								<button className="btn pink lighten-1 z-depth-0" onClick={this.handleClick}>
									Enviar Mensagem
								</button>
							) : (
								<button className="btn pink lighten-1 z-depth-0" disabled="disabled">
									Aguarde...
								</button>
							)}
							<div className="center red-text">
								{contactMessage ? (
									<p>{contactMessage}</p>
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
		loadingContact: state.contacts.loadingContact,
		contactMessage: state.contacts.contactMessage
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createContact: contact  => dispatch(createContact(contact)),
		startLoadingContact: () => dispatch(startLoadingContact())
	 }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Contact)