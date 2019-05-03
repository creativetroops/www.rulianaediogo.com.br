import React from 'react'
import { connect } from 'react-redux'
import StyledMessage from './styles'
import { Container, Section } from '../../objects/Design'
import { TitleInternal } from '../../objects/Titles'
import { Paragraph } from '../../objects/Paragraphs'
import { ImageInternal } from '../../objects/Images'
import Shadow from '../../objects/Shadow'
import { Button, ContainerButtons } from '../../objects/Button'
import { toggleModal } from '../../store/actions/modalActions'

const Message = props => (
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
      <ContainerButtons>
        <Button onClick={() => props.toggleModal('MODAL_MESSAGE', true)}>
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
  toggleModal: (id, open) => dispatch(toggleModal(id, open)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message)
