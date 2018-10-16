import React, { Component, Fragment}    from 'react'
import { connect }                      from 'react-redux'
import { createRsvp, startLoadingRsvp } from '../../store/actions/rsvpActions'
//import { rsvpConfig }                   from '../../configs/rsvpConfig'

const rsvpConfig = {
	maxPeople: 5,
	minPeople: 1,
	maxChild: 5,
	minChild: 1
};

class Rsvp extends Component {
	state = {
		errorMsg: "",
		errorPeopleList : "",
		errorChildList: "",
		typedChild: "",
		typesPeople: "",
		name: "Mario Sergio",
		email: "batistamariosergio@gmail.com",
		areaCode: "45",
		phone: "31322956",
		peopleList: [],
		childrenList: [],
		message: "Parabéns aos noivos!"
	}
	addChild = () => {
		if (!this.state.typedChild){
			this.setState({ errorChildList: `Digite um nome para salvar na lista.` })
			return
		}
		if (this.state.childrenList.includes(this.state.typedChild)){
			this.setState({ errorChildList: `Essa criança já está na lista.` })
			return
		}
		if (this.state.childrenList.length > rsvpConfig.maxChild) {
			this.setState({ errorChildList: `Você pode inserir no máximo ${rsvpConfig.maxChild} crianças.` })
			return
		}
		this.setState({
			typedChild: "",
			errorChildList: "",
			childrenList: [...this.state.childrenList, this.state.typedChild]
		})
	}
	removeChild = (child) => {
		this.setState({
			typedChild: "",
			errorChildList: "",
			childrenList: this.state.childrenList.filter((childItem) => {
				return childItem !== child
			})
		})
	}
	addPeople = () => {
		if (!this.state.typesPeople) {
			this.setState({ errorPeopleList: `Digite um nome para salvar na lista.` })
			return
		}
		if (this.state.peopleList.includes(this.state.typesPeople)) {
			this.setState({ errorPeopleList: `Essa criança já está na lista.` })
			return
		}
		if (this.state.peopleList.length > rsvpConfig.maxPeople) {
			this.setState({ errorPeopleList: `Você pode inserir no máximo ${rsvpConfig.maxPeople} pessoas.` })
			return
		}
		this.setState({
			typesPeople: "",
			errorPeopleList: "",
			peopleList: [...this.state.peopleList, this.state.typesPeople]
		})
	}
	removePeople = (people) => {
		if (this.state.peopleList.length === rsvpConfig.minPeople){
			this.setState({ errorPeopleList: `Você deve deixar pelo menos ${rsvpConfig.minPeople} pessoa na lista` })
			return
		}
		this.setState({
			peopleList: this.state.peopleList.filter((peopleItem) => {
				return peopleItem !== people
			})
		})
	}
	handleChange = e => {
		if (e.target.id === "typedChild" || e.target.id === "typesPeople")
			e.target.value = e.target.value.toUpperCase()
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleClick = () => {
		if (this.state.peopleList.length < rsvpConfig.minPeople){
			this.setState({ errorMsg: `Você deve ter pelo menos ${rsvpConfig.minPeople} pessoa na lista de confirmação` })
			return
		}
		this.setState({	errorMsg: '' })
		this.props.startLoadingRsvp()
		this.props.createRsvp(this.state)
	}
	render() {
		const { rsvpMessage, loadingRsvp } = this.props
		return (
			<Fragment>
				<form className="white">
					<div className="row">
						<h2>Confirme por Gentileza sua Presença</h2>
						<p>Confirme aqui a sua presença, até o dia xxx</p>
					</div>
					<div className="input-field">
						<label htmlFor="name">Nome</label>
						<input
							type="text"
							id="name"
							onChange={this.handleChange}
							value="Mario Sergio"
							disabled={loadingRsvp ? "disabled" : null}
						/>
					</div>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							onChange={this.handleChange}
							value="batistamariosergio@gmail.com"
							disabled={loadingRsvp ? "disabled" : null}
						/>
					</div>
					<div className="input-field">
						<label htmlFor="areaCode">
							Código de Área do Telefone
						</label>
						<input
							type="text"
							id="areaCode"
							onChange={this.handleChange}
							value="43"
							disabled={loadingRsvp ? "disabled" : null}
						/>
					</div>
					<div className="input-field">
						<label htmlFor="phone">Telefone</label>
						<input
							type="text"
							id="phone"
							onChange={this.handleChange}
							value="31322956"
							disabled={loadingRsvp ? "disabled" : null}
						/>
					</div>
					<h2>
						Quantidade de Pessoas: {this.state.peopleList.length}
					</h2>
					<ul>
						{this.state.peopleList.map((people, index) => (
							<li key={index}>{people} <button type="button" onClick={() => this.removePeople(people)}>Remover</button></li>
						))}
					</ul>
					<div className="input-field">
						<label htmlFor="peopleList">Lista de Pessoas</label>
						<input
							type="text"
							id="typesPeople"
							onChange={this.handleChange}
							value={this.state.typesPeople}
						/>
						<button type="button" onClick={this.addPeople}>
							Adicionar Pessoa
						</button>
						{ this.state.errorPeopleList && <p>{this.state.errorPeopleList}</p>}
					</div>
					<h2>
						Quantidade de Crianças: {this.state.childrenList.length}
					</h2>
					<ul>
						{this.state.childrenList.map((child, index) => (
							<li key={index}>{child} <button type="button" onClick={() => this.removeChild(child)}>Remover</button></li>
						))}
					</ul>
					<div className="input-field">
						<label htmlFor="childrenList">Lista de Crianças</label>
						<input
							type="text"
							id="typedChild"
							onChange={this.handleChange}
							value={this.state.typedChild}
						/>
						<button type="button" onClick={this.addChild}>
							Adicionar Criança
						</button>
						{this.state.errorChildList && <p>{this.state.errorChildList}</p>}
					</div>
					<div className="input-field">
						<label htmlFor="message">Observação adicional</label>
						<textarea
							className="materialize-textarea"
							id="message"
							onChange={this.handleChange}
							defaultValue="Parabéns aos noivos!"
							disabled={loadingRsvp ? "disabled" : null}
						/>
					</div>
					<div className="input-field">
						{!loadingRsvp ? (
							<button
								className="btn pink lighten-1 z-depth-0"
								onClick={this.handleClick}
							>
								Confirmar Presença
							</button>
						) : (
							<button
								className="btn pink lighten-1 z-depth-0"
								disabled="disabled"
							>
								Aguarde...
							</button>
						)}
						<div className="center red-text">
							{rsvpMessage ? <p>{rsvpMessage}</p> : null}
						</div>
						<div className="center red-text">
							{this.state.errorMsg ? <p>{this.state.errorMsg}</p> : null}
						</div>
					</div>
				</form>
			</Fragment>
		)
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