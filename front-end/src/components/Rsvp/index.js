import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Section } from '../../objects/Containers'
import { TitleInternal } from '../../objects/Titles'
import { Paragraph } from '../../objects/Paragraphs'
import { ImageInternal } from '../../objects/Images'
import { Button, ContainerButtons } from '../../objects/Button'
import { Creators as ModalCreators } from '../../store/ducks/modal'

import StyledRsvp from './styles'

const Rsvp = props => (
  <Container bg="green-dark">
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
  modalActions: bindActionCreators(ModalCreators, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Rsvp)
