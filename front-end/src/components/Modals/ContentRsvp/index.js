import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { Col3, Col1, Row } from '../../Grid'
import { TitleModal, SubTitleModal } from '../../../objects/Titles'
import { Paragraph } from '../../../objects/Paragraphs'
import StyledContentRsvp from './styles'
import { FormItem, InputModal, TextAreaModal } from '../../../objects/Form'
import { Creators as RsvpCreators } from '../../../store/ducks/rsvp'
import { Creators as ModalCreators } from '../../../store/ducks/modal'
import { CenterContent } from '../../AlignContent'
import {
  validateEmail,
  validateName,
  validateMessage,
  validatePhone,
  phoneMask,
} from '../../../helpers'
import { ButtonForm } from '../../../objects/Button'

class ContentRsvp extends Component {
  handlePhoneChange = e => phoneMask(e.target.value)

  sendForm = async () => {
    const { validateFields, resetFields } = this.props.form
    validateFields(async (errors, values) => {
      if (!errors) {
        await this.props.rsvpActions.startRsvp()
        await this.props.rsvpActions.createRsvp(values)
        resetFields()
      }
    })
  }

  form = getFieldDecorator => (
    <>
      <Row bottom="1.3rem">
        <Col3>
          <FormItem label="Nome" colon={false}>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, insira o seu nome completo.',
                  validator: validateName,
                },
              ],
              // initialValue: 'Diogo Cezar',
            })(<InputModal />)}
          </FormItem>
        </Col3>
        <Col3>
          <FormItem label="E-mail" colon={false}>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, insira o seu e-mail',
                  validator: validateEmail,
                },
              ],
              // initialValue: 'diogo@diogocezar.com',
            })(<InputModal />)}
          </FormItem>
        </Col3>
        <Col3>
          <FormItem label="Telefone" colon={false}>
            {getFieldDecorator('phone', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, insira o seu telefone',
                  validator: validatePhone,
                },
              ],
              // initialValue: '(43) 93300-0663',
              getValueFromEvent: this.handlePhoneChange,
            })(<InputModal />)}
          </FormItem>
        </Col3>
      </Row>
      <Row bottom="1.3rem">
        <Col1>
          <FormItem label="Mensagem" colon={false}>
            {getFieldDecorator('message', {
              rules: [
                {
                  required: true,
                  message: 'Qual a sua mensagem?',
                  validator: validateMessage,
                },
              ],
              // initialValue: 'Testando uma mensagem!',
            })(<TextAreaModal />)}
          </FormItem>
        </Col1>
      </Row>
      <Row bottom="1.3rem" top="2rem">
        <CenterContent>
          <ButtonForm onClick={this.sendForm} right="0">
            Enviar
          </ButtonForm>
          <ButtonForm
            className="closeButton"
            onClick={() => {
              this.props.modalActions.toggleModal('MODAL_RSVP', false)
            }}
            right="0"
          >
            Fechar
          </ButtonForm>
        </CenterContent>
      </Row>
    </>
  )

  loading = () => (
    <>
      <SubTitleModal>Aguarde...</SubTitleModal>
      <Paragraph color="gray">Enviando as informações!</Paragraph>
    </>
  )

  finished = (title, message) => (
    <>
      <SubTitleModal>{title}</SubTitleModal>
      <Paragraph color="gray">{message}</Paragraph>
      <CenterContent>
        <ButtonForm
          onClick={() => {
            this.props.modalActions.toggleModal('MODAL_RSVP', false)
            this.props.rsvpActions.reset()
          }}
          right="0"
        >
          Fechar
        </ButtonForm>
      </CenterContent>
    </>
  )

  render() {
    const { getFieldDecorator } = this.props.form
    const { success, loading, message } = this.props.rsvp
    let content = null
    if (loading) content = this.loading()
    if (success && !loading && message) content = this.finished('Obrigado!', message)
    if (!success && !loading && message) content = this.finished('Oops, algo deu errado!', message)
    if (!loading && !success && !message) content = this.form(getFieldDecorator)
    return (
      <StyledContentRsvp>
        <TitleModal>Confirmação de Presença</TitleModal>
        {content}
      </StyledContentRsvp>
    )
  }
}

const mapStateToProps = state => ({
  rsvp: state.rsvp,
  modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
  rsvpActions: bindActionCreators(RsvpCreators, dispatch),
  modalActions: bindActionCreators(ModalCreators, dispatch),
})

const ContentRsvpWithForm = Form.create()(ContentRsvp)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentRsvpWithForm)
