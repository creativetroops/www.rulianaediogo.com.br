import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class RsvpList extends Component {
	prevStep = () => {
		this.props.history.push("/home/identification")
		this.props.changeStep(2)
		this.props.changeError('')
	};
	nextStep = () => {
		if (this.props.childList.length &&
			this.props.peopleList.lengt
		) {
			this.props.history.push("/home/identification/message")
			this.props.changeStep(4)
			this.props.changeError('')
		}
		else {
			this.props.changeError('Você precisa adicionar pelo menos uma pessoa na lista')
		}
	}
	render() {
		return (
			<Fragment>
				<h5 className="center">Qual será a lista de pessoas?</h5>
				<h2>
					Quantidade de Pessoas: {this.props.peopleList.length}
				</h2>
				<ul>
					{this.props.peopleList.map((people, index) => (
						<li key={index}>{people} <button type="button" onClick={() => this.removePeople(people)}>Remover</button></li>
					))}
				</ul>
				<div className="input-field">
					<label htmlFor="peopleList">Lista de Pessoas</label>
					<input
						type="text"
						id="typedPeople"
						onChange={this.handleChange}
						value={this.props.typedPeople}
					/>
					<button type="button" onClick={this.addPeople}>
						Adicionar Pessoa
						</button>
					<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
						<div className="error-message">
							{this.props.errorPeopleList && <p>{this.props.errorPeopleList}</p>}
						</div>
					</ReactCSSTransitionGroup>
				</div>
				<h2>
					Quantidade de Crianças: {this.props.childrenList.length}
				</h2>
				<ul>
					{this.props.childrenList.map((child, index) => (
						<li key={index}>{child} <button type="button" onClick={() => this.removeChild(child)}>Remover</button></li>
					))}
				</ul>
				<div className="input-field">
					<label htmlFor="childrenList">Lista de Crianças</label>
					<input
						type="text"
						id="typedChild"
						onChange={this.handleChange}
						value={this.props.typedChild}
					/>
					<button type="button" onClick={this.addChild}>
						Adicionar Criança
					</button>
					<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
						<div className="error-message">
							{this.props.errorChildList && <p>{this.props.errorChildList}</p>}
						</div>
					</ReactCSSTransitionGroup>
				</div>
				<button type="button" onClick={() => { this.prevStep() }}>Voltar</button>
				<button type="button" onClick={() => { this.nextStep() }}>Continuar</button>
			</Fragment>
		)
	}
}

export default withRouter(RsvpList)