import React, { Fragment } from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'

const ListBillet = ({ billets }) => (
  <Fragment>
    <h2>Boletos</h2>
    {billets
      && billets.map(billet => (
        <Fragment key={billet.id}>
          <h3>{billet.name}</h3>
          <p>{billet.email}</p>
          <p>{billet.phone}</p>
          <p>{billet.message}</p>
          <p>{billet.value}</p>
          <p>{moment(billet.createdAt.toDate()).calendar()}</p>
        </Fragment>
      ))}
  </Fragment>
)

export default ListBillet
