import React from 'react'
import StyledRsvp from './styles'
import { Container, Section } from '../../objects/Design'
import { TitleInternal } from '../../objects/Titles'
import { Paragraph } from '../../objects/Paragraphs'
import { ImageInternal } from '../../objects/Images'
import Shadow from '../../objects/Shadow'
import { Button, ContainerButtons } from '../../objects/Button'

const Rsvp = () => (
  <Container bg="green-dark">
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
        <ContainerButtons>
          <Button>Confirmar Presença</Button>
        </ContainerButtons>
      </StyledRsvp>
    </Section>
  </Container>
)

export default Rsvp
