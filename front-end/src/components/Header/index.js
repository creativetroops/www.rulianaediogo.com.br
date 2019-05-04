import React from 'react'
import StyledHeader from './styles'
import Logo from '../../objects/Logo'
import Countdown from '../../objects/Countdown'
import Particles from '../../objects/Particles'

const Header = () => (
  <StyledHeader>
    <Particles />
    <Logo src="/assets/images/red-logo.svg" />
    <Countdown />
  </StyledHeader>
)

export default Header
