import React from 'react'
import StyledHeader from './styles'
import Logo from '../../objects/Logo'
import Countdown from '../../objects/Countdown'
import Shadow from '../../objects/Shadow'
import Particles from '../../objects/Particles'

const Header = () => (
  <StyledHeader>
    <Shadow />
    <Particles />
    <Logo src="/assets/images/red-logo.svg" />
    <Countdown />
  </StyledHeader>
)

export default Header
