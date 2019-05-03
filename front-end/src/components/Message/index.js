import React from 'react'
import StyledMessage from './styles'
import { Container, Section } from '../../objects/Design'
import { TitleInternal } from '../../objects/Titles'
import { Paragraph } from '../../objects/Paragraphs'
import { ImageInternal } from '../../objects/Images'
import Shadow from '../../objects/Shadow'

const Message = () => (
  <Container>
    <Shadow />
    <Section>
      <StyledMessage>
        <TitleInternal>Mensagem para o Casal</TitleInternal>
        <ImageInternal src="/assets/images/red-message-icon.svg" />
        <Paragraph>
          Deixe a sua mensagem para o casal, essa mensagem será recebida
          diretamente em nossos e-mails.
        </Paragraph>
      </StyledMessage>
    </Section>
  </Container>
)

export default Message
