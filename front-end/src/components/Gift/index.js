import React from 'react'
import StyledGift from './styles'
import { Container, Section } from '../../objects/Design'
import { TitleInternal } from '../../objects/Titles'
import { Paragraph } from '../../objects/Paragraphs'
import { ImageInternal } from '../../objects/Images'
import Shadow from '../../objects/Shadow'

const Gift = () => (
  <Container>
    <Shadow />
    <Section>
      <StyledGift>
        <TitleInternal>Lista de Presentes</TitleInternal>
        <ImageInternal src="/assets/images/red-gift-list-icon.svg" />
        <Paragraph>
          Pessoal, nós estamos montando o nosso apartamento! Por isso,
          gostaríamos de pedir os presentes de uma forma{' '}
          <span>diferenciada</span>, gostaríamos de receber em{' '}
          <span>dinheiro</span>!
        </Paragraph>
        <Paragraph>
          Você pode gerar um boleto no sistema abaixo, ou fazer uma
          transferência diretamente para nosso conta conjunta.
        </Paragraph>
      </StyledGift>
    </Section>
  </Container>
)

export default Gift
