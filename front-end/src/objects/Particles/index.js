import React from 'react'
import { Particles as ReactParticles } from 'react-particles-js'
import StyledParticles from './styles'

const Particles = () => (
  <StyledParticles>
    <ReactParticles
      className="particles"
      params={{
        particles: {
          number: {
            value: 50,
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
            speed: 2,
            direction: 'top',
            out_mode: 'out',
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 1,
              size: 8,
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
  </StyledParticles>
)

export default Particles
