import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TitleModal } from '../../../objects/Titles'
import { Creators as ModalCreators } from '../../../store/ducks/modal'
import StyledContentHistory from './styles'
import { Row } from '../../Grid'
import { CenterContent } from '../../AlignContent'
import { ButtonForm } from '../../../objects/Button'
import { Paragraph } from '../../../objects/Paragraphs'

class ContentHistory extends Component {
  render() {
    return (
      <StyledContentHistory>
        <TitleModal>História</TitleModal>
        <Paragraph color="gray">
          No dia 27 de junho de 2019 completamos <strong>5 anos de namoro!</strong> Ruliana e Diogo
          se conhecem a um bom tempo, e esse tempo foi fundamental para nossa história. Há quem diga
          que nós somos bem diferentes... E até certo ponto é verdade, mas o que nós temos em comum
          é o mais importante, a <strong>vontade de ficar juntos!</strong>
        </Paragraph>
        <Paragraph color="gray">
          Planejamos nosso casamento com muito carinho para celebrar com nossos amigos e familiares
          este momento tão importante. Gostaríamos de agradecer a cada um de vocês por fazerem parte
          dessa nossa data especial.
        </Paragraph>
        <Paragraph color="gray">
          Compartilhe suas fotos do evento com a hashtag <strong>#rulianaediogo</strong> e qualquer
          dúvida basta enviar um email para:{' '}
          <a href="mailto:rulianaediogo@gmail.com">
            <strong>rulianaediogo@gmail.com</strong>
          </a>
        </Paragraph>
        <Row bottom="1.3rem" top="2rem">
          <CenterContent>
            <ButtonForm
              className="closeButton"
              onClick={() => {
                this.props.modalActions.toggleModal('MODAL_HISTORY', false)
              }}
              right="0"
            >
              Fechar
            </ButtonForm>
          </CenterContent>
        </Row>
      </StyledContentHistory>
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
)(ContentHistory)
