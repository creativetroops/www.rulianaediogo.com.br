import React from 'react'

import {
  StyledButton,
  StyledContainerButtons,
  StyledTransparentButton,
  StyledFormButton,
} from './styles'

const Button = props => <StyledButton {...props}>{props.children}</StyledButton>
const ButtonTransparent = props => (
  <StyledTransparentButton {...props}>{props.children}</StyledTransparentButton>
)
const ButtonForm = props => <StyledFormButton {...props}>{props.children}</StyledFormButton>
const ContainerButtons = props => (
  <StyledContainerButtons {...props}>{props.children}</StyledContainerButtons>
)

export {
  Button, ButtonTransparent, ContainerButtons, ButtonForm,
}
