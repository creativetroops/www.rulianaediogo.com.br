import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Section } from '../../objects/Containers'
import { TitleInternalDecoration } from '../../objects/Titles'
import { Paragraph } from '../../objects/Paragraphs'
import { Creators as ModalCreators } from '../../store/ducks/modal'

import ItemInfo from '../../objects/ItemInfo'

import StyledInfos from './styles'

const Infos = props => (
  <Container bg="green-dark">
    <Section>
      <StyledInfos>
        <TitleInternalDecoration>Informações Adicionais</TitleInternalDecoration>
        <Paragraph>
          Temos mais algumas coisas que você podem ver aqui em nosso site. Fizemos tudo com muito
          carinho espero que aproveitem!
        </Paragraph>
        <div className="icons">
          <ItemInfo
            src="/assets/images/red-info-history-icon.svg"
            onClick={() => props.modalActions.toggleModal('MODAL_HISTORY', true)}
          >
            História
          </ItemInfo>
          <ItemInfo
            src="/assets/images/red-info-accommodation-icon.svg"
            onClick={() => props.modalActions.toggleModal('MODAL_ACCOMMODATION', true)}
          >
            Hospedagem
          </ItemInfo>
          <ItemInfo
            src="/assets/images/red-info-beauty-icon.svg"
            onClick={() => props.modalActions.toggleModal('MODAL_BEAUTY_SALON', true)}
          >
            Dica de Salão
          </ItemInfo>
          <ItemInfo
            src="/assets/images/red-info-map-icon.svg"
            onClick={() => {
              window.open('https://goo.gl/maps/P6g1DRwqb81EHojv6')
            }}
          >
            Veja o Mapa
          </ItemInfo>
        </div>
      </StyledInfos>
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
)(Infos)
