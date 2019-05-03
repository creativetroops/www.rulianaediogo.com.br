import React from 'react'
import StyledInfos from './styles'
import { Container, Section } from '../../objects/Design'
import { TitleInternal } from '../../objects/Titles'
import { Paragraph } from '../../objects/Paragraphs'
import Shadow from '../../objects/Shadow'

const Infos = () => (
  <Container bg="green-darker">
    <Shadow />
    <Section>
      <StyledInfos>
        <TitleInternal>Informações Adicionais</TitleInternal>
        <Paragraph>
          Temos mais algumas coisas que você podem ver aqui em nosso site.
          Fizemos tudo com muito carinho espero que aproveitem!
        </Paragraph>
      </StyledInfos>
    </Section>
  </Container>
)

export default Infos
