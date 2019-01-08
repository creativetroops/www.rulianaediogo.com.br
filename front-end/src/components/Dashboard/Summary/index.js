import React, { Fragment } from 'react'

const Summary = ({
  contacts, gifts, rsvps, users,
}) => {
  const countPeople = rsvps => rsvps.reduce((count, item) => count + item.peopleList.length, 0)
  const countChildren = rsvps => rsvps.reduce((count, item) => count + item.childrenList.length, 0)
  const countTotal = rsvps => rsvps.reduce((count, item) => count + (item.childrenList.length + item.peopleList.length), 0)
  return (
    <Fragment>
      <h2>Resumos</h2>
      <p>Total de contatos: {contacts.length}</p>
      <p>Total de presentes: {gifts.length}</p>
      <p>Total de confirmações: {rsvps.length}</p>
      <p>Total de Administradores: {users.length}</p>
      <p>
        Valor total arrecadado:{' '}
        {
          gifts.reduce((acc, cur) => ({ value: parseFloat(acc.value) + parseFloat(cur.value) }))
            .value
        }
      </p>
      <p>Quantidade de Pessoas: {countPeople(rsvps)}</p>
      <p>Quantidade de Crianças: {countChildren(rsvps)}</p>
      <p>Total de Convidados: {countTotal(rsvps)}</p>
    </Fragment>
  )
}

export default Summary
