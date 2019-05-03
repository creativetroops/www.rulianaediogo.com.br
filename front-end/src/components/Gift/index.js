import React from 'react'
import { connect } from 'react-redux'
import StyledGift from './styles'
import { Container, Section } from '../../objects/Design'
import { TitleInternal } from '../../objects/Titles'
import { Paragraph } from '../../objects/Paragraphs'
import { ImageInternal } from '../../objects/Images'
import Shadow from '../../objects/Shadow'
import { Button, ContainerButtons } from '../../objects/Button'
import { toggleModal } from '../../store/actions/modalActions'

const Gift = props => (
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
        <ContainerButtons>
          <Button onClick={() => props.toggleModal('MODAL_GIFT_BILLET', true)}>
            Boleto
          </Button>
          <Button onClick={() => props.toggleModal('MODAL_GIFT_DEPOSIT', true)}>
            Depósito
          </Button>
        </ContainerButtons>
      </StyledGift>
    </Section>
  </Container>
)

const mapStateToProps = state => ({
  modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
  toggleModal: (id, open) => dispatch(toggleModal(id, open)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gift)
