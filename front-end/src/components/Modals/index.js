import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ModalCreators } from '../../store/ducks/modal'
import { StyledModal, StyledModalMain, StyledButtonClose } from './styles'

import ContentMessage from './ContentMessage'
import ContentRsvp from './ContentRsvp'
import ContentBillet from './ContentBillet'
import ContentDeposit from './ContentDeposit'
import ContentHistory from './ContentHistory'
import ContentAccommodation from './ContentAccommodation'
import ContentBeautySalon from './ContentBeautySalon'

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
      props.modalActions.toggleModal('MODAL_GIFT_BILLET', false)
    }}
  >
    <ContentBillet />
  </Modal>
)

const ModalGiftDebitStructure = props => (
  <Modal
    show={props.modal.MODAL_GIFT_DEPOSIT || false}
    onClose={() => {
      props.modalActions.toggleModal('MODAL_GIFT_DEPOSIT', false)
    }}
  >
    <ContentDeposit />
  </Modal>
)

const ModalRsvpStructure = props => (
  <Modal
    show={props.modal.MODAL_RSVP || false}
    onClose={() => {
      props.modalActions.toggleModal('MODAL_RSVP', false)
    }}
  >
    <ContentRsvp />
  </Modal>
)

const ModalMessageStructure = props => (
  <Modal
    show={props.modal.MODAL_MESSAGE || false}
    onClose={() => {
      props.modalActions.toggleModal('MODAL_MESSAGE', false)
    }}
  >
    <ContentMessage />
  </Modal>
)

const ModalHistoryStructure = props => (
  <Modal
    show={props.modal.MODAL_HISTORY || false}
    onClose={() => {
      props.modalActions.toggleModal('MODAL_HISTORY', false)
    }}
  >
    <ContentHistory />
  </Modal>
)

const ModalAccommodationStructure = props => (
  <Modal
    show={props.modal.MODAL_ACCOMMODATION || false}
    onClose={() => {
      props.modalActions.toggleModal('MODAL_ACCOMMODATION', false)
    }}
  >
    <ContentAccommodation />
  </Modal>
)

const ModalBeautySalonStructure = props => (
  <Modal
    show={props.modal.MODAL_BEAUTY_SALON || false}
    onClose={() => {
      props.modalActions.toggleModal('MODAL_BEAUTY_SALON', false)
    }}
  >
    <ContentBeautySalon />
  </Modal>
)

const mapStateToProps = state => ({
  modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(ModalCreators, dispatch),
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

const ModalBeautySalon = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalBeautySalonStructure)

export {
  Modal,
  ModalGiftBillet,
  ModalGiftDeposit,
  ModalRsvp,
  ModalMessage,
  ModalHistory,
  ModalAccommodation,
  ModalBeautySalon,
}
