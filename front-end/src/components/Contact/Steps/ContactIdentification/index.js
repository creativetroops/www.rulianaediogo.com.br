import React, { Component, Fragment } from 'react'
import { withRouter }                 from 'react-router-dom'
import ReactCSSTransitionGroup        from 'react-addons-css-transition-group'

class ContactIdentification extends Component {
	prevStep = () => {
		this.props.history.push("/home")
		this.props.changeStep(1)
		this.props.changeError('')
	};
	nextStep = () => {
		if( this.props.values.name  !== "" &&
			this.props.values.email !== "" &&
			!this.props.errors.name &&
			!this.props.errors.email
			){
				this.props.history.push("/home/contact/message")
				this.props.changeStep(3)
				this.props.changeError('')
			}
		else{
			this.props.changeError('Oops, será que você não esqueceu de preencher o nome ou o email corretamente?')
		}
	}
	componentDidMount(){
		this.props.clearContactMessage()
	}
	render(){
		return (
			<Fragment>
				<h5 className="center">Muito bem! Entre em contato com o casal</h5>
				<input
					id="name"
					placeholder = "Digite o seu nome"
					type        = "text"
					value       = {this.props.values.name}
					onChange    = {this.props.handleChange}
					onBlur      = {this.props.handleBlur}
					className   = {this.props.errors.name && this.props.touched.name ? "error" : ""} />
				<div class="error-box">
					<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
						{this.props.errors.name && this.props.touched.name &&
							<div className="error-message">
								{this.props.errors.name}
							</div>
						}
					</ReactCSSTransitionGroup>
				</div>
				<input
					id          = "email"
					placeholder = "Digite o seu e-mail"
					type        = "text"
					value       = {this.props.values.email}
					onChange    = {this.props.handleChange}
					onBlur      = {this.props.handleBlur}
					className   = {this.props.errors.email && this.props.touched.email ? "error" : ""} />
				<div class="error-box">
					<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
						{this.props.errors.email && this.props.touched.email &&
							<div className="error-message">
								{this.props.errors.email}
							</div>
						}
					</ReactCSSTransitionGroup>
				</div>
				<button type="button" onClick={() => { this.prevStep() }}     >Voltar</button>
				<button type="button" onClick={() => { this.nextStep() }}>Continuar</button>
			</Fragment>
		)
	}
}

export default withRouter(ContactIdentification)