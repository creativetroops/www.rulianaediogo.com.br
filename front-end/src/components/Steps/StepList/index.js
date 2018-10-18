import React, { Component, Fragment } from 'react'
import { withRouter }                 from 'react-router-dom'

import Title            from '../../../objects/Title'
import Button           from '../../../objects/Button'
import ComponentMessage from '../../../objects/ComponentMessage'
import Input            from '../../../objects/Input'

import rsvpConfig       from '../../../configs/rsvpConfig'

class StepList extends Component {
	state = {
		peopleList      : this.props.peopleList,
		childrenList    : this.props.childrenList,
		typedChild      : '',
		typedPeople     : '',
		errorChildList  : '',
		errorPeopleList : '',
	}
	addChild = () => {
		if (!this.state.typedChild) {
			this.setState({
				typedChild: "",
				errorChildList: `Digite um nome para salvar na lista.`
			})
			return
		}
		if (this.state.childrenList.includes(this.state.typedChild)) {
			this.setState({
				typedChild: "",
				errorChildList: `Essa criança já está na lista.`
			})
			return
		}
		if (this.state.childrenList.length >= rsvpConfig.maxChild) {
			this.setState({
				typedChild: "",
				errorChildList: `Você pode inserir no máximo ${
					rsvpConfig.maxChild
					} crianças.`
			})
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
		if (!this.state.typedPeople) {
			this.setState({
				typedPeople: "",
				errorPeopleList: `Digite um nome para salvar na lista.`
			})
			return
		}
		if (this.state.peopleList.includes(this.state.typedPeople)) {
			this.setState({
				typedPeople: "",
				errorPeopleList: `Essa pessoa já está na lista.`
			})
			return
		}
		if (this.state.peopleList.length >= rsvpConfig.maxPeople) {
			this.setState({
				typedPeople: "",
				errorPeopleList: `Você pode inserir no máximo ${
					rsvpConfig.maxPeople
					} pessoas.`
			})
			return
		}
		this.setState({
			typedPeople: "",
			errorPeopleList: "",
			peopleList: [...this.state.peopleList, this.state.typedPeople]
		})
	}
	removePeople = (people) => {
		if (this.state.peopleList.length === rsvpConfig.minPeople) {
			this.setState({ errorPeopleList: `Você deve deixar pelo menos ${rsvpConfig.minPeople} pessoa na lista` })
			return
		}
		this.setState({
			typedPeople: "",
			errorPeopleList: "",
			peopleList: this.state.peopleList.filter(peopleItem => {
				return peopleItem !== people
			})
		})
	}
	handleChange = e => {
		if (e.target.id === "typedChild" || e.target.id === "typedPeople")
			e.target.value = e.target.value.toUpperCase()
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleClick = () => {

		this.setState({ errorMsg: '' })
		this.props.startLoadingRsvp()
		this.props.createRsvp(this.state)
	}
	prevStep = () => {
		this.props.changeStep(this.props.step-1)
		this.props.history.push(this.props.prevPath)
		this.props.changeError('')
	}
	nextStep = () => {
		if (this.state.peopleList.length < rsvpConfig.minPeople) {
			this.props.changeError(`Você deve ter pelo menos ${rsvpConfig.minPeople} pessoa na lista de confirmação`)
			return
		}
		this.props.values.peopleList   = this.state.peopleList
		this.props.values.childrenList = this.state.childrenList
		this.props.setLists(this.state.peopleList, this.state.childrenList)
		this.props.changeStep(this.props.step + 1)
		this.props.history.push(this.props.nextPath)
		this.props.changeError('')
	}
	componentDidMount() {
		if (this.props.step !== this.props.currentStep) this.props.history.push('/home')
	}
	render(){
		return (
			<Fragment>
				<Title>{this.props.title}</Title>
				<Title>Quantidade de Pessoas: {this.state.peopleList.length}</Title>
				<ul>
					{this.state.peopleList.map((people, index) => (
						<li key={index}>{people} <Button onClick={() => this.removePeople(people)}>Remover</Button></li>
					))}
				</ul>
				<Input id="typedPeople" onChange={this.handleChange} value={this.state.typedPeople}></Input>
				<Button onClick={this.addPeople}>Adicionar Pessoa</Button>
				<ComponentMessage>
					{this.state.errorPeopleList && <p>{this.state.errorPeopleList}</p>}
				</ComponentMessage>
				<Title>Quantidade de Crianças: {this.state.childrenList.length}</Title>
				<ul>
					{this.state.childrenList.map((child, index) => (
						<li key={index}>{child} <Button type="button" onClick={() => this.removeChild(child)}>Remover</Button></li>
					))}
				</ul>
				<Input id="typedChild" onChange={this.handleChange} value={this.state.typedChild}></Input>
				<Button onClick={this.addChild}>Adicionar Criança</Button>
				<ComponentMessage>
					{this.state.errorPeopleList && <p>{this.state.errorPeopleList}</p>}
				</ComponentMessage>
				<Button onClick={() => { this.prevStep() }}>{this.props.buttonPrev}</Button>
				<Button onClick={() => { this.nextStep() }}>{this.props.buttonNext}</Button>
			</Fragment>
		)
	}
}

export default withRouter(StepList)