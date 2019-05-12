import React from 'react'

import StyledListBase from './styles'
import ListItemBase from './ListItemBase'

const ListBase = ({ data }) => (
  <StyledListBase>
    <div className="listbase-container">
      {(data && data.map(item => <ListItemBase item={item} />)) || <p>Carregando</p>}
    </div>
  </StyledListBase>
)

export default ListBase
