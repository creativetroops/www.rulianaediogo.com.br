import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TitleModal } from '../../../objects/Titles'
import { Creators as ModalCreators } from '../../../store/ducks/modal'
import StyledContentAccommodation from './styles'
import { Row } from '../../Grid'
import { CenterContent } from '../../AlignContent'
import { ButtonForm } from '../../../objects/Button'
import { Paragraph } from '../../../objects/Paragraphs'

class ContentAccommodation extends Component {
  render() {
    return (
      <StyledContentAccommodation>
        <TitleModal>Dica de Hospedagem</TitleModal>
        <Paragraph color="gray">
          Pessoal, como sabemos que muitos são de fora, nós vamos indicar aqui um hotel que é perto
          do evento, e também perto do <strong>Shopping Catuai</strong>.
        </Paragraph>
        <Paragraph color="gray">
          Rua Edwy Taques Araújo, 300 CEP: 86.047-790 - Londrina - Paraná - Brasil
        </Paragraph>
        <Paragraph color="gray">
          Telefone:{' '}
          <strong>
            <a href="tel:+55 43 3373-9200">+55 43 3373-9200</a>
          </strong>
        </Paragraph>
        <Row bottom="1.3rem" top="2rem">
          <CenterContent>
            <ButtonForm
              className="closeButton"
              onClick={() => {
                this.props.modalActions.toggleModal('MODAL_ACCOMMODATION', false)
              }}
              right="0"
            >
              Fechar
            </ButtonForm>
            <ButtonForm
              onClick={() => {
                window.open('http://www.villalbahoteis.com.br/londrina/')
              }}
              right="0"
            >
              Hotel Villalba
            </ButtonForm>
          </CenterContent>
        </Row>
      </StyledContentAccommodation>
    )
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(ModalCreators, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentAccommodation)
