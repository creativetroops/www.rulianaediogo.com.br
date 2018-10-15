import React, { Component, Fragment }   from 'react'
import { connect }                      from 'react-redux'
import { createGift, startLoadingGift } from "../../store/actions/giftActions";

class Gift extends Component {
	state = {
		name       : 'Mario Sergio',
		email      : 'batistamariosergio@gmail.com',
		cpf_cnpj   : '70995168849',
		area_code  : '43',
		phone      : '31322956',
		birth_date : '24/10/1953',
		value      : '50',
		message    : 'Parabéns aos noivos!',
		senderHash : ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
    handleClick = () => {
		this.props.startLoadingGift()
        window.PagSeguroDirectPayment.onSenderHashReady((response) => {
            if (response.status !== 'error'){
				this.setState({
					senderHash: response.senderHash
				})
				this.props.createGift(this.state)
			}
        })
    }
    render () {
		const { giftMessage, loadingGift } = this.props
        return <Fragment>
					<form className="white">
						<div className="row">
							<p>
								Preencha as informações para enviar um
								presente para os noivos
							</p>
						</div>
						<div className="input-field">
							<label htmlFor="name">Nome</label>
							<input type="text" id="name" onChange={this.handleChange} value="Mario Sergio" disabled={loadingGift ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="email">Email</label>
							<input type="email" id="email" onChange={this.handleChange} value="diogoctb@gmail.com" disabled={loadingGift ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="cpf_cnpj">
								CPF ou CNPJ
							</label>
							<input type="text" id="cpf_cnpj" onChange={this.handleChange} value="70995168849" disabled={loadingGift ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="area_code">
								Código de Área do Telefone
							</label>
							<input type="text" id="area_code" onChange={this.handleChange} value="43" disabled={loadingGift ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="phone">Telefone</label>
							<input type="text" id="phone" onChange={this.handleChange} value="31322956" disabled={loadingGift ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="birth_date">
								Data de Nascimento
							</label>
							<input type="text" id="birth_date" onChange={this.handleChange} value="24/10/1953" disabled={loadingGift ? 'disabled' : null}/>
						</div>
						<div className="range-field">
							<h4>R$ {this.state.value}</h4>
							<input type="range" id="value" min="30" max="1000" onChange={this.handleChange} disabled={loadingGift ? 'disabled' : null} />
						</div>
						<div className="input-field">
							<label htmlFor="message">
								Mensagem para os Noivos
							</label>
							<textarea className="materialize-textarea" id="message" onChange={this.handleChange} defaultValue="Parabéns aos noivos!" disabled={loadingGift ? 'disabled' : null} />
						</div>
						<div className="input-field">
							{!loadingGift ? (
								<button className="btn pink lighten-1 z-depth-0" onClick={this.handleClick}>
									Enviar Presente
								</button>
							) : (
								<button className="btn pink lighten-1 z-depth-0" disabled="disabled">
									Aguarde...
								</button>
							)}
							<div className="center red-text">
								{giftMessage ? (
									<p>{giftMessage}</p>
								) : null}
							</div>
						</div>
					</form>
			</Fragment>;
    }
}

const mapStateToProps = (state) => {
	return {
		loadingGift: state.gifts.loadingGift,
		giftMessage: state.gifts.giftMessage
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createGift: gift     => dispatch(createGift(gift)),
		startLoadingGift: () => dispatch(startLoadingGift())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Gift)