import React, { Fragment } from 'react';

const Summary = ({ contacts, gifts, rsvps}) => {
	const countPeople = rsvps => {
		let count = 0
		rsvps.map((item) => {
			return count += item.peopleList.length
		})
		return count
	}
	const countChildren = rsvps => {
		let count = 0
		rsvps.map((item) => {
			return count += item.childrenList.length
		})
		return count
	}
	const countTotal = rsvps => {
		let count = 0;
		rsvps.map(item => {
			return count += item.childrenList.length + item.peopleList.length;
		});
		return count;
	};
	return (
		<Fragment>
			<h2>Resumos</h2>
			<p>Total de contatos: {contacts.length}</p>
			<p>Total de presentes: {gifts.length}</p>
			<p>Total de confirmações: {rsvps.length}</p>
			<p>Valor total arrecadado: {gifts.reduce((acc, cur) => ({ value: parseFloat(acc.value) + parseFloat(cur.value) })).value}</p>
			<p>Quantidade de Pessoas: {countPeople(rsvps)}</p>
			<p>Quantidade de Crianças: {countChildren(rsvps)}</p>
			<p>Total de Convidados: {countTotal(rsvps)}</p>
		</Fragment>
	)
}

export default Summary