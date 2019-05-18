import React from 'react'
import StyledSeparator from './styles'
import Decoration from '../Decoration'

const Separator = props => (
  <StyledSeparator {...props}>
    <Decoration opacity="0.2" />
    <Decoration positionX="1200px" positionY="-300px" right="0" opacity="0.3" />
  </StyledSeparator>
)

export default Separator
