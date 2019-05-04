import React from 'react'

import { StyledContainer, StyledSection } from './styles'

const Container = props => (
  <StyledContainer {...props}>{props.children}</StyledContainer>
)
const Section = props => (
  <StyledSection {...props}>{props.children}</StyledSection>
)

export { Container, Section }
