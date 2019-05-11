import React, { Fragment } from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'

const ListMessages = ({ messages }) => (
  <Fragment>
    <h2>Mensagens</h2>
    {messages
      && messages.map(message => (
        <Fragment key={message.id}>
          <h3>{message.name}</h3>
          <p>{message.email}</p>
          <p>{message.message}</p>
          <p>{moment(message.createdAt.toDate()).calendar()}</p>
        </Fragment>
      ))}
  </Fragment>
)

export default ListMessages
