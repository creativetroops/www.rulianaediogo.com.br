import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Section } from '../../objects/Containers'
import { TitleInternal } from '../../objects/Titles'
import { Paragraph } from '../../objects/Paragraphs'
import { ImageInternal } from '../../objects/Images'
import { Button, ContainerButtons } from '../../objects/Button'
import { Creators as ModalCreators } from '../../store/ducks/modal'

import StyledMessage from './styles'

const Message = props => (
  <Container>
    <Section>
      <StyledMessage>
        <TitleInternal>Mensagem para o Casal</TitleInternal>
        <ImageInternal src="/assets/images/red-message-icon.svg" />
        <Paragraph>
          Deixe a sua mensagem para o casal, essa mensagem será recebida
          diretamente em nossos e-mails.
        </Paragraph>
      </StyledMessage>
      <ContainerButtons>
        <Button
          onClick={() => props.modalActions.toggleModal('MODAL_MESSAGE', true)}
        >
          Enviar Mensagem
        </Button>
      </ContainerButtons>
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
)(Message)
