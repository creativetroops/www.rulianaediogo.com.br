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
		error_people_list : "",
		error_child_list: "",
		typed_child: "",
		typed_people: "",
		name: "Mario Sergio",
		email: "batistamariosergio@gmail.com",
		area_code: "45",
		phone: "31322956",
		people_list: ["Mario Sergio", "Isabel Cristina José Teixeira Batista"],
		children_list: ["Criança 1", "Criança 2"],
		message: "Parabéns aos noivos!"
	}
	addChild = () => {
		if (!this.state.typed_child){
			this.setState({ error_child_list: `Digite um nome para salvar na lista.` })
			return
		}
		if (this.state.children_list.includes(this.state.typed_child)){
			this.setState({ error_child_list: `Essa criança já está na lista.` })
			return
		}
		if (this.state.children_list.length > rsvpConfig.maxChild) {
			this.setState({ error_child_list: `Você pode inserir no máximo ${rsvpConfig.maxChild} crianças.` })
			return
		}
		this.setState({
			typed_child: "",
			error_child_list: "",
			children_list: [...this.state.children_list, this.state.typed_child]
		})
	}
	removeChild = (child) => {
		this.setState({
			typed_child: "",
			error_child_list: "",
			children_list: this.state.children_list.filter((childItem) => {
				return childItem !== child
			})
		})
	}
	addPeople = () => {
		if (!this.state.typed_people) {
			this.setState({ error_people_list: `Digite um nome para salvar na lista.` })
			return
		}
		if (this.state.people_list.includes(this.state.typed_people)) {
			this.setState({ error_people_list: `Essa criança já está na lista.` })
			return
		}
		if (this.state.people_list.length > rsvpConfig.maxPeople) {
			this.setState({ error_people_list: `Você pode inserir no máximo ${rsvpConfig.maxPeople} pessoas.` })
			return
		}
		this.setState({
			typed_people: "",
			error_people_list: "",
			people_list: [...this.state.people_list, this.state.typed_people]
		})
	}
	removePeople = (people) => {
		if (this.state.people_list.length === rsvpConfig.minPeople){
			this.setState({ error_people_list: `Você deve deixar pelo menos ${rsvpConfig.minPeople} pessoa na lista` })
			return
		}
		this.setState({
			people_list: this.state.people_list.filter((peopleItem) => {
				return peopleItem !== people
			})
		})
	}
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleClick = () => {
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
						<label htmlFor="area_code">
							Código de Área do Telefone
						</label>
						<input
							type="text"
							id="area_code"
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
						Quantidade de Pessoas: {this.state.people_list.length}
					</h2>
					<ul>
						{this.state.people_list.map((people, index) => (
							<li key={index}>{people} <button type="button" onClick={() => this.removePeople(people)}>Remover</button></li>
						))}
					</ul>
					<div className="input-field">
						<label htmlFor="people_list">Lista de Pessoas</label>
						<input
							type="text"
							id="typed_people"
							onChange={this.handleChange}
							value={this.state.typed_people}
						/>
						<button type="button" onClick={this.addPeople}>
							Adicionar Pessoa
						</button>
						{ this.state.error_people_list && <p>{this.state.error_people_list}</p>}
					</div>
					<h2>
						Quantidade de Crianças: {this.state.children_list.length}
					</h2>
					<ul>
						{this.state.children_list.map((child, index) => (
							<li key={index}>{child} <button type="button" onClick={() => this.removeChild(child)}>Remover</button></li>
						))}
					</ul>
					<div className="input-field">
						<label htmlFor="children_list">Lista de Crianças</label>
						<input
							type="text"
							id="typed_child"
							onChange={this.handleChange}
							value={this.state.typed_child}
						/>
						<button type="button" onClick={this.addChild}>
							Adicionar Criança
						</button>
						{this.state.error_child_list && <p>{this.state.error_child_list}</p>}
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