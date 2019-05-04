import React from 'react'
import StyledRed from './styles'
import { Container, Section } from '../../objects/Design'
import { TitleMain, SubTitleMain, TitleInternal } from '../../objects/Titles'
import { Paragraph, ParagraphMain } from '../../objects/Paragraphs'
import { ImageMain } from '../../objects/Images'
import { ContainerButtons, ButtonTransparent } from '../../objects/Button'

const Red = () => (
  <Container>
    <Section>
      <StyledRed>
        <hgroup>
          <TitleMain>Ruliana & Diogo</TitleMain>
          <SubTitleMain>Irão se Casar</SubTitleMain>
        </hgroup>
        <Paragraph>
          É com muita alegria que convidamos vocês para a nossa cerimônia de
          casamento!
        </Paragraph>
        <ImageMain src="/assets/images/red-ballon.svg" />
        <TitleInternal>Save The Date</TitleInternal>
        <ParagraphMain>27 de Julho de 2019</ParagraphMain>
        <TitleInternal>Rancho San Fernando</TitleInternal>
        <address>
          <ParagraphMain>
            <span>Rua São Paulo nº 54</span>
            <span>Distrito do Espirito Santo</span>
            <span>Londrina - Paraná</span>
          </ParagraphMain>
        </address>

        <ContainerButtons>
          <a href="tel:(43) 3337-7007">
            <ButtonTransparent>(43) 3337-7007</ButtonTransparent>
          </a>
          <a href="tel:(43) 9106-3438">
            <ButtonTransparent>(43) 9106-3438</ButtonTransparent>
          </a>
        </ContainerButtons>
        <ParagraphMain className="link">
          <a
            href="http://www.ranchosanfernando.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://www.ranchosanfernando.com.br
          </a>
        </ParagraphMain>
      </StyledRed>
    </Section>
  </Container>
)

export default Red
