import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class RsvpIdentification extends Component {
	prevStep = () => {
		this.props.history.push("/home")
		this.props.changeStep(1)
		this.props.changeError('')
	};
	nextStep = () => {
		if (this.props.values.name  !== "" &&
			this.props.values.email !== "" &&
			this.props.values.areaCode === "" &&
			this.props.values.phone === "" &&
			!this.props.errors.name &&
			!this.props.errors.email &&
			!this.props.errors.areaCode &&
			!this.props.errors.phone
		) {
			this.props.history.push("/home/rsvp/list")
			this.props.changeStep(3)
			this.props.changeError('')
		}
		else {
			this.props.changeError('Oops, será que você não esqueceu de preencher o nome, email ou telefone corretamente?')
		}
	}
	componentDidMount() {
		this.props.clearRsvpMessage()
	}
	render() {
		return (
			<Fragment>
				<h5 className="center">Muito bem! informe seus dádos básicos</h5>
				<input
					id="name"
					placeholder="Digite o seu nome"
					type="text"
					value={this.props.values.name}
					onChange={this.props.handleChange}
					onBlur={this.props.handleBlur}
					className={this.props.errors.name && this.props.touched.name ? "error" : ""} />
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
					id="email"
					placeholder="Digite o seu e-mail"
					type="text"
					value={this.props.values.email}
					onChange={this.props.handleChange}
					onBlur={this.props.handleBlur}
					className={this.props.errors.email && this.props.touched.email ? "error" : ""} />
				<div class="error-box">
					<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
						{this.props.errors.email && this.props.touched.email &&
							<div className="error-message">
								{this.props.errors.email}
							</div>
						}
					</ReactCSSTransitionGroup>
				</div>
				<input
					id="areaCode"
					placeholder="Digite o código de área"
					type="text"
					value={this.props.values.areaCode}
					onChange={this.props.handleChange}
					onBlur={this.props.handleBlur}
					className={this.props.errors.areaCode && this.props.touched.areaCode ? "error" : ""} />
				<div class="error-box">
					<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
						{this.props.errors.areaCode && this.props.touched.areaCode &&
							<div className="error-message">
								{this.props.errors.areaCode}
							</div>
						}
					</ReactCSSTransitionGroup>
				</div>
				<input
					id="phone"
					placeholder="Digite o telefone"
					type="text"
					value={this.props.values.phone}
					onChange={this.props.handleChange}
					onBlur={this.props.handleBlur}
					className={this.props.errors.phone && this.props.touched.phone ? "error" : ""} />
				<div class="error-box">
					<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
						{this.props.errors.phone && this.props.touched.phone &&
							<div className="error-message">
								{this.props.errors.phone}
							</div>
						}
					</ReactCSSTransitionGroup>
				</div>
				<button type="button" onClick={() => { this.prevStep() }}>Voltar</button>
				<button type="button" onClick={() => { this.nextStep() }}>Continuar</button>
			</Fragment>
		)
	}
}

export default withRouter(RsvpIdentification)