import React from 'react'
import StyledRsvp from './styles'
import { Container, Section } from '../../objects/Design'
import { TitleInternal } from '../../objects/Titles'
import { Paragraph } from '../../objects/Paragraphs'
import { ImageInternal } from '../../objects/Images'
import Shadow from '../../objects/Shadow'

const Rsvp = () => (
  <Container bg="green-darker">
    <Shadow />
    <Section>
      <StyledRsvp>
        <TitleInternal>Confirmação de Presença</TitleInternal>
        <ImageInternal src="/assets/images/red-rsvp-icon.svg" />
        <Paragraph>
          Pedimos por favor para realizar a sua confirmação de presença até o
          dia <strong>27/06/2019</strong>, para isso, basta clicar no botão e
          preencher as informações solicitadas.
        </Paragraph>
      </StyledRsvp>
    </Section>
  </Container>
)

export default Rsvp
