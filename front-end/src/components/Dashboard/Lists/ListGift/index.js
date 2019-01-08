import React, { Fragment } from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'

const ListGift = ({ gifts }) => (
    <Fragment>
      <h2>Presentes dos Convidados</h2>
      {gifts
        && gifts.map(gift => (
            <Fragment key={gift.id}>
              <h3>{gift.name}</h3>
              <p>{gift.email}</p>
              <p>{gift.message}</p>
              <p>{gift.value}</p>
              <p>{moment(gift.createdAt.toDate()).calendar()}</p>
            </Fragment>
        ))}
    </Fragment>
)

export default ListGift
