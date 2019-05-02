import React from 'react'

import { StyledContainer, StyledSection } from './styles'

const Container = props => <StyledContainer>{props.children}</StyledContainer>
const Section = props => <StyledSection>{props.children}</StyledSection>

export { Container, Section }
