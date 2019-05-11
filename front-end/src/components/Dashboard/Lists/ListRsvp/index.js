import React, { Fragment } from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'

const ListRsvp = ({ rsvps }) => (
  <Fragment>
    <h2>Confirmações de Presença</h2>
    {rsvps
      && rsvps.map(rsvp => (
        <Fragment key={rsvp.id}>
          <h3>{rsvp.name}</h3>
          <p>{rsvp.email}</p>
          <p>{rsvp.message}</p>
          <p>{moment(rsvp.createdAt.toDate()).calendar()}</p>
        </Fragment>
      ))}
  </Fragment>
)

export default ListRsvp
