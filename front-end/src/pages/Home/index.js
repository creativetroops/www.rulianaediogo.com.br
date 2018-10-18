import React, { Component, Fragment } from 'react'

import Gift      from '../../components/Gift'
import Instagram from "../../components/Instagram"
import Countdown from '../../components/Countdown'
import Rsvp      from '../../components/Rsvp'
import Contact   from '../../components/Contact'

class Home extends Component {
	render() {
		return (
			<Fragment>
				<div className="container">
					<h2>Home</h2>
					<ul>
						<li>Foto do Casal</li>
						<li>Logo</li>
						<li>Frase: depois preenchemos</li>
						<li>Data do Casamento</li>
						<li>Hashtag: #rulianaediogo</li>
					</ul>
					<Countdown />
					<h2>O casamento</h2>
					<ul>
						<li>Local: Rancho San Fernando</li>
						<li>Endereço: Rua São Paulo nº 54 - Distrito do Espirito Santo Londrina - Paraná - Fones: +55 43 3337-7007 e +55 43 9106-3438</li>
						<li>Horário: 17h</li>
						<li>Fotos do Rancho</li>
						<li>Site: http://ranchosanfernando.com.br</li>
						<li>Como chegar - Mapa</li>
						<li>Dica de Hospedagem - Mapa</li>
					</ul>
					<h2>História do Casal</h2>
					<ul>
						<li>Fotos</li>
						<li>História</li>
					</ul>
					<h2>Depoimento dos Padrinhos</h2>
					<ul>
						<li>Foto do Casal</li>
						<li>Nome do Casal</li>
						<li>Depoimento</li>
					</ul>
					<h2>Presentes</h2>
					<p>Queridos convidados, sua presença já é um grande presente para nós, porém se desejarem nos presentear, damos duas opções:</p>
					<h3>1) Presentei os Noivos com Dinheiro (Preferimos)</h3>
					<Gift />
					<h3>2) Lista de Presentes</h3>
					<ul>
						<li>Link para a Loja Virtual</li>
					</ul>
					<Rsvp />
					<Instagram />
					<Contact />
				</div>
			</Fragment>
		)
	}
}

export default Home