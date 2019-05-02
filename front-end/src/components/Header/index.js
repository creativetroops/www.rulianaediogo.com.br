import React from 'react'
import StyledHeader from './styles'
import Logo from '../../objects/Logo'
import Countdown from '../../objects/Countdown'

const Header = () => (
  <StyledHeader>
    <Logo src="/assets/images/red-logo.svg" />
    <Countdown />
  </StyledHeader>
)

export default Header
