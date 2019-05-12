import React from 'react'
import moment from 'moment'
import StyledListItemBase from './styles'
import 'moment/locale/pt-br'

const ListItemBase = ({ item }) => (
  <StyledListItemBase>
    <div className="listitembase-container">
      <h2>{item.name}</h2>
      {item.email && (
        <p className="listitembase-email">
          <a href={`mailto:${item.email}`}>{item.email}</a>
        </p>
      )}
      {item.phone && <p className="listitembase-phone">{item.phone}</p>}
      {item.message && <p className="listitembase-message">{item.message}</p>}
      {item.value && (
        <p className="listitembase-value">
          R${' '}
          {parseFloat(item.value)
            .toFixed(2)
            .replace('.', ',')}
        </p>
      )}
      <p className="listitembase-time">{moment(item.createdAt.toDate()).calendar()}</p>
    </div>
  </StyledListItemBase>
)

export default ListItemBase
