import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TitleModal } from '../../../objects/Titles'
import { Creators as ModalCreators } from '../../../store/ducks/modal'
import StyledContentBeautySalon from './styles'
import { Row } from '../../Grid'
import { CenterContent } from '../../AlignContent'
import { ButtonForm } from '../../../objects/Button'
import { Paragraph } from '../../../objects/Paragraphs'

class ContentBeautySalon extends Component {
  render() {
    return (
      <StyledContentBeautySalon>
        <TitleModal>Dicas de Salão de Beleza</TitleModal>
        <Paragraph color="gray">
          Pessoal, como sabemos que muitos são de fora, nós vamos indicar aqui alguns salões de
          beleza.
        </Paragraph>
        <Paragraph color="gray">Indicamos duas opções disponíveis nos links a seguir.</Paragraph>
        <Row bottom="1.3rem" top="2rem">
          <CenterContent>
            <ButtonForm
              onClick={() => {
                window.open('https://www.instagram.com/anamotacabeleireiros/')
              }}
              right="15"
            >
              Ana Mota
            </ButtonForm>
            <ButtonForm
              onClick={() => {
                window.open('https://www.instagram.com/studioonelondrina')
              }}
              right="0"
            >
              Studio One
            </ButtonForm>
          </CenterContent>
        </Row>
        <Row bottom="1.3rem" top="2rem">
          <CenterContent>
            <ButtonForm
              className="closeButton"
              onClick={() => {
                this.props.modalActions.toggleModal('MODAL_BEAUTY_SALON', false)
              }}
              right="0"
            >
              Fechar
            </ButtonForm>
          </CenterContent>
        </Row>
      </StyledContentBeautySalon>
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
)(ContentBeautySalon)
