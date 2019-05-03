import React from 'react'
import StyledSeparator from './styles'
import Shadown from '../../objects/Shadow'
import Decoration from '../../objects/Decoration'

const Separator = props => (
  <StyledSeparator {...props}>
    <Decoration opacity="0.2" />
    <Decoration
      positionX="1200px"
      positionY="-300px"
      right="0"
      opacity="0.3"
    />{' '}
    */}
    <Shadown />
  </StyledSeparator>
)

export default Separator
