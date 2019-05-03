import React from 'react'

import { StyledButton, StyledContainerButtons } from './styles'

const Button = props => <StyledButton {...props}>{props.children}</StyledButton>
const ContainerButtons = props => (
  <StyledContainerButtons {...props}>{props.children}</StyledContainerButtons>
)

export { Button, ContainerButtons }
