import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import StyledGift from './styles'
import { Container, Section } from '../../objects/Containers'
import { TitleInternal } from '../../objects/Titles'
import { Paragraph } from '../../objects/Paragraphs'
import { ImageInternal } from '../../objects/Images'
import { Button, ContainerButtons } from '../../objects/Button'
import { Creators as ModalCreators } from '../../store/ducks/modal'

const Gift = props => (
  <Container>
    <Section>
      <StyledGift>
        <TitleInternal>Lista de Presentes</TitleInternal>
        <ImageInternal src="/assets/images/red-gift-list-icon.svg" />
        <Paragraph>
          Pessoal, nós estamos montando o nosso apartamento! Por isso, gostaríamos de pedir os
          presentes de uma forma <span>diferenciada</span>, gostaríamos de receber em{' '}
          <span>dinheiro</span>!
        </Paragraph>
        <Paragraph>
          Você pode gerar um <span>boleto</span> no sistema abaixo, ou fazer um{' '}
          <span>depósito</span> diretamente para nosso conta conjunta.
        </Paragraph>
        <ContainerButtons>
          <Button onClick={() => props.modalActions.toggleModal('MODAL_GIFT_BILLET', true)}>
            Boleto
          </Button>
          <Button onClick={() => props.modalActions.toggleModal('MODAL_GIFT_DEPOSIT', true)}>
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
  modalActions: bindActionCreators(ModalCreators, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gift)
