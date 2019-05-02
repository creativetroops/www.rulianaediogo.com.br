import React from 'react'
import StyledRed from './styles'
import { Container, Section } from '../../objects/Design'

const Red = () => (
  <Container>
    <Section>
      <StyledRed>
        <hgroup>
          <h1>Ruliana & Diogo</h1>
          <h2>Vão Casar</h2>
        </hgroup>
        <p>
          É com muita alegria que convidamos vocês para a nossa cerimônia de
          casamento!
        </p>
        <h3>Save The Date</h3>
        <p>27 de Julho de 2019</p>
        <h3>Rancho San Fernando</h3>
        <address>
          <p>
            Rua São Paulo nº 54 - Distrito do Espirito Santo Londrina - Paraná
          </p>
        </address>
        <a href="tel:(43) 3337-7007">(43) 3337-7007</a>
        <a href="tel:(43) 9106-3438">(43) 9106-3438</a>
        <a href="http://www.ranchosanfernando.com.br">
          http://www.ranchosanfernando.com.br
        </a>
      </StyledRed>
    </Section>
  </Container>
)

export default Red
