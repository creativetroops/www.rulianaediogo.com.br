import React from 'react'
import { connect } from 'react-redux'
import { toggleModal } from '../../store/actions/modalActions'
import { StyledModal, StyledModalMain, StyledButtonClose } from './styles'

const Modal = props => (
  <StyledModal className={props.show && 'show'}>
    <StyledModalMain>
      <StyledButtonClose onClick={props.onClose} />
      {props.children}
    </StyledModalMain>
  </StyledModal>
)

const ModalGiftBilletStructure = props => (
  <Modal
    show={props.modal.MODAL_GIFT_BILLET || false}
    onClose={() => {
      props.toggleModal('MODAL_GIFT_BILLET', false)
    }}
  >
    <h1>Boleto</h1>
    <p>Testando uma mensagem</p>
  </Modal>
)

const ModalGiftDebitStructure = props => (
  <Modal
    show={props.modal.MODAL_GIFT_DEPOSIT || false}
    onClose={() => {
      props.toggleModal('MODAL_GIFT_DEPOSIT', false)
    }}
  >
    <h1>Depósito</h1>
    <p>Testando uma mensagem</p>
  </Modal>
)

const ModalRsvpStructure = props => (
  <Modal
    show={props.modal.MODAL_RSVP || false}
    onClose={() => {
      props.toggleModal('MODAL_RSVP', false)
    }}
  >
    <h1>Rsvp</h1>
    <p>Testando uma mensagem</p>
  </Modal>
)

const ModalMessageStructure = props => (
  <Modal
    show={props.modal.MODAL_MESSAGE || false}
    onClose={() => {
      props.toggleModal('MODAL_MESSAGE', false)
    }}
  >
    <h1>Mensagem</h1>
    <p>Testando uma mensagem</p>
  </Modal>
)

const ModalHistoryStructure = props => (
  <Modal
    show={props.modal.MODAL_HISTORY || false}
    onClose={() => {
      props.toggleModal('MODAL_HISTORY', false)
    }}
  >
    <h1>História</h1>
    <p>Testando uma mensagem</p>
  </Modal>
)

const ModalAccommodationStructure = props => (
  <Modal
    show={props.modal.MODAL_ACCOMMODATION || false}
    onClose={() => {
      props.toggleModal('MODAL_ACCOMMODATION', false)
    }}
  >
    <h1>Hospedagem</h1>
    <p>Testando uma mensagem</p>
  </Modal>
)

const ModalGodfathersStructure = props => (
  <Modal
    show={props.modal.MODAL_GODFATHERS || false}
    onClose={() => {
      props.toggleModal('MODAL_GODFATHERS', false)
    }}
  >
    <h1>Padrinhos</h1>
    <p>Testando uma mensagem</p>
  </Modal>
)

const ModalScheduleStructure = props => (
  <Modal
    show={props.modal.MODAL_SCHEDULE || false}
    onClose={() => {
      props.toggleModal('MODAL_SCHEDULE', false)
    }}
  >
    <h1>Cronograma</h1>
    <p>Testando uma mensagem</p>
  </Modal>
)

const mapStateToProps = (state) => {
  console.log(state)
  return {
    modal: state.modal,
  }
}

const mapDispatchToProps = dispatch => ({
  toggleModal: (id, open) => dispatch(toggleModal(id, open)),
})

const ModalGiftBillet = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalGiftBilletStructure)

const ModalGiftDeposit = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalGiftDebitStructure)

const ModalRsvp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalRsvpStructure)

const ModalMessage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalMessageStructure)

const ModalHistory = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalHistoryStructure)

const ModalAccommodation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalAccommodationStructure)

const ModalGodfathers = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalGodfathersStructure)

const ModalSchedule = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalScheduleStructure)

export {
  Modal,
  ModalGiftBillet,
  ModalGiftDeposit,
  ModalRsvp,
  ModalMessage,
  ModalHistory,
  ModalAccommodation,
  ModalGodfathers,
  ModalSchedule,
}
