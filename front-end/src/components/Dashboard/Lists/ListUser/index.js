import React from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'

const ListUser = ({ users }) => (
  <>
    <h2>Usuários</h2>
    {users
      && users.map(user => (
        <key={user.id}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>{user.email}</p>
          <p>Criado em: {moment(user.createdAt.toDate()).calendar()}</p>
        </>
      ))}
  </>
)

export default ListUser
