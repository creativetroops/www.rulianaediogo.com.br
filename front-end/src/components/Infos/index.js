import React from 'react'
import StyledInfos from './styles'
import { Container, Section } from '../../objects/Design'
import { TitleInternalDecoration } from '../../objects/Titles'
import { Paragraph } from '../../objects/Paragraphs'
import Shadow from '../../objects/Shadow'
import ItemInfo from '../../objects/ItemInfo'

const Infos = () => (
  <Container bg="green-dark">
    <Shadow />
    <Section>
      <StyledInfos>
        <TitleInternalDecoration>
          Informações Adicionais
        </TitleInternalDecoration>
        <Paragraph>
          Temos mais algumas coisas que você podem ver aqui em nosso site.
          Fizemos tudo com muito carinho espero que aproveitem!
        </Paragraph>
        <div className="icons">
          <ItemInfo src="/assets/images/red-info-history-icon.svg">
            História
          </ItemInfo>
          <ItemInfo src="/assets/images/red-info-accommodation-icon.svg">
            Hospedagem
          </ItemInfo>
          <ItemInfo src="/assets/images/red-info-godfathers-icon.svg">
            Padrinhos
          </ItemInfo>
          <ItemInfo src="/assets/images/red-info-schedule-icon.svg">
            Padrinhos
          </ItemInfo>
        </div>
      </StyledInfos>
    </Section>
  </Container>
)

export default Infos
