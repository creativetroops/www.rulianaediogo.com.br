import React from 'react'
import { connect } from 'react-redux'
import StyledRsvp from './styles'
import { Container, Section } from '../../objects/Design'
import { TitleInternal } from '../../objects/Titles'
import { Paragraph } from '../../objects/Paragraphs'
import { ImageInternal } from '../../objects/Images'
import Shadow from '../../objects/Shadow'
import { Button, ContainerButtons } from '../../objects/Button'
import { toggleModal } from '../../store/actions/modalActions'

const Rsvp = props => (
  <Container bg="green-dark">
    <Shadow />
    <Section>
      <StyledRsvp>
        <TitleInternal>Confirmação de Presença</TitleInternal>
        <ImageInternal src="/assets/images/red-rsvp-icon.svg" />
        <Paragraph>
          Pedimos por favor para realizar a sua confirmação de presença até o
          dia <strong>27/06/2019</strong>, para isso, basta clicar no botão e
          preencher as informações solicitadas.
        </Paragraph>
        <ContainerButtons>
          <Button onClick={() => props.toggleModal('MODAL_RSVP', true)}>
            Confirmar Presença
          </Button>
        </ContainerButtons>
      </StyledRsvp>
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
)(Rsvp)
