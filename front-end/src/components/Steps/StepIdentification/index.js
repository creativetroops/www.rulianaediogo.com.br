import React, { Component, Fragment } from 'react'
import { withRouter }                 from 'react-router-dom'

import Title        from '../../../objects/Title'
import Button       from '../../../objects/Button'
import Input        from '../../../objects/Input'
import FieldMessage from '../../../objects/FieldMessage'

class StepIdentification extends Component {
	prevStep = () => {
		this.props.changeStep(this.props.step-1)
		this.props.history.push(this.props.prevPath)
		this.props.changeError('')
	}
	nextStep = () => {
		const { name, email }           = this.props.values
		const { nameError, emailError } = this.props.errors
		let auth = false
		if (name !== "" && email !== "" && !nameError && !emailError){
			auth = true
			if(this.props.havePhone){
				auth = false
				const { areaCode, phone}           = this.props.values
				const { areaCodeError, phoneError} = this.this.props.errors
				if (areaCode !== "" && phone !== "" && !areaCodeError && !phoneError)
					auth = true
			}
		}
		if (auth) {
			this.props.changeStep(this.props.step + 1)
			this.props.history.push(this.props.nextPath)
			this.props.changeError('')
		}
		else {
			this.props.changeError(this.props.errorStepMessage)
		}
	}
	componentDidMount() {
		if (this.props.step !== this.props.currentStep) this.props.history.push('/home')
		this.props.clearFinalMessage()
	}
	render(){
		return (
			<Fragment>
				<Title>{this.props.title}</Title>
				<Input
					id="name"
					placeholder="Digite o seu nome"
					type="text"
					value={this.props.values.name}
					onChange={this.props.handleChange}
					onBlur={this.props.handleBlur}
					className={this.props.errors.name && this.props.touched.name ? "--error" : ""}
				/>
				<FieldMessage
					error   = {this.props.errors.name}
					touched = {this.props.touched.name}
					message = { this.props.errors.name}
				/>
				<Input
					id="email"
					placeholder="Digite o seu e-mail"
					type="text"
					value={this.props.values.email}
					onChange={this.props.handleChange}
					onBlur={this.props.handleBlur}
					className={this.props.errors.email && this.props.touched.email ? "--error" : ""}
				/>
				<FieldMessage
					error   = {this.props.errors.email}
					touched = {this.props.touched.email}
					message = { this.props.errors.email}
				/>
				{this.props.havePhone &&
					<Fragment>
						<Input
							id="areaCode"
							placeholder="Digite o código de área"
							type="text"
							value={this.props.values.areaCode}
							onChange={this.props.handleChange}
							onBlur={this.props.handleBlur}
							className={this.props.errors.areaCode && this.props.touched.areaCode ? "--error" : ""}
						/>
						<FieldMessage
							error={this.props.errors.areaCode}
							touched={this.props.touched.areaCode}
							message={this.props.errors.areaCode}
						/>
						<Input
							id="phone"
							placeholder="Digite o telefone"
							type="text"
							value={this.props.values.phone}
							onChange={this.props.handleChange}
							onBlur={this.props.handleBlur}
							className={this.props.errors.phone && this.props.touched.phone ? "--error" : ""}
						/>
						<FieldMessage
							error={this.props.errors.phone}
							touched={this.props.touched.phone}
							message={this.props.errors.phone}
						/>
					</Fragment>
				}
				<Button onClick={() => { this.prevStep() }}>{this.props.buttonPrev}</Button>
				<Button onClick={() => { this.nextStep() }}>{this.props.buttonNext}</Button>
			</Fragment>
		)
	}
}

export default withRouter(StepIdentification)