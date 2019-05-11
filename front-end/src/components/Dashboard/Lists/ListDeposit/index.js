import React, { Fragment } from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'

const ListDeposit = ({ deposits }) => (
  <Fragment>
    <h2>Depósitos</h2>
    {deposits
      && deposits.map(deposit => (
        <Fragment key={deposit.id}>
          <h3>{deposit.name}</h3>
          <p>{deposit.email}</p>
          <p>{deposit.phone}</p>
          <p>{deposit.message}</p>
          <p>{deposit.value}</p>
          <p>{moment(deposit.createdAt.toDate()).calendar()}</p>
        </Fragment>
      ))}
  </Fragment>
)

export default ListDeposit
