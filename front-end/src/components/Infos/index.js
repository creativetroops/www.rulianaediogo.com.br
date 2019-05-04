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
        <TitleInternalDecoration>
          Informações Adicionais
        </TitleInternalDecoration>
        <Paragraph>
          Temos mais algumas coisas que você podem ver aqui em nosso site.
          Fizemos tudo com muito carinho espero que aproveitem!
        </Paragraph>
        <div className="icons">
          <ItemInfo
            src="/assets/images/red-info-history-icon.svg"
            onClick={() => props.modalActions.toggleModal('MODAL_HISTORY', true)
            }
          >
            História
          </ItemInfo>
          <ItemInfo
            src="/assets/images/red-info-accommodation-icon.svg"
            onClick={() => props.modalActions.toggleModal('MODAL_ACCOMMODATION', true)
            }
          >
            Hospedagem
          </ItemInfo>
          <ItemInfo
            src="/assets/images/red-info-godfathers-icon.svg"
            onClick={() => props.modalActions.toggleModal('MODAL_GODFATHERS', true)
            }
          >
            Padrinhos
          </ItemInfo>
          <ItemInfo
            src="/assets/images/red-info-schedule-icon.svg"
            onClick={() => props.modalActions.toggleModal('MODAL_SCHEDULE', true)
            }
          >
            Cronograma
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
