import React from 'react'
import Particles from 'react-particles-js'
import StyledHeader from './styles'
import Logo from '../../objects/Logo'
import Countdown from '../../objects/Countdown'
import Shadow from '../../objects/Shadow'

const Header = () => (
  <StyledHeader>
    <Shadow />
    <Particles
      className="particles"
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: 'top',
            out_mode: 'out',
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: 'bubble',
            },
            onclick: {
              enable: false,
              mode: 'repulse',
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
    />
    <Logo src="/assets/images/red-logo.svg" />
    <Countdown />
  </StyledHeader>
)

export default Header
