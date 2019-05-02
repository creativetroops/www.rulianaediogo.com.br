import React from 'react'
import StyledRed from './styles'
import { Container, Section } from '../../objects/Design'
import { TitleMain, SubTitleMain, TitleMainItem } from '../../objects/Titles'
import { Paragraph, ParagraphMain } from '../../objects/Paragraphs'
import { ImageMain } from '../../objects/Images'

const Red = () => (
  <Container>
    <Section>
      <StyledRed>
        <hgroup>
          <TitleMain>Ruliana & Diogo</TitleMain>
          <SubTitleMain>Vão Casar</SubTitleMain>
        </hgroup>
        <Paragraph>
          É com muita alegria que convidamos vocês para a nossa cerimônia de
          casamento!
        </Paragraph>
        <ImageMain src="/assets/images/red-ballon.svg" />
        <TitleMainItem>Save The Date</TitleMainItem>
        <ParagraphMain>27 de Julho de 2019</ParagraphMain>
        <TitleMainItem>Rancho San Fernando</TitleMainItem>
        <address>
          <ParagraphMain>
            <span>Rua São Paulo nº 54</span>
            <span>Distrito do Espirito Santo</span>
            <span>Londrina - Paraná</span>
          </ParagraphMain>
        </address>
        <ParagraphMain>
          <a href="tel:(43) 3337-7007">(43) 3337-7007</a>
          <a href="tel:(43) 9106-3438">(43) 9106-3438</a>
        </ParagraphMain>
        <ParagraphMain className="link">
          <a href="http://www.ranchosanfernando.com.br">
            http://www.ranchosanfernando.com.br
          </a>
        </ParagraphMain>
      </StyledRed>
    </Section>
  </Container>
)

export default Red
