import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { Col2, Col1, Row } from '../../Grid'
import { TitleModal, SubTitleModal } from '../../../objects/Titles'
import { FormItem, InputModal, TextAreaModal } from '../../../objects/Form'
import { CenterContent } from '../../AlignContent'
import { validateEmail, validateName, validateMessage } from '../../../helpers'
import { ButtonForm } from '../../../objects/Button'
import { Paragraph } from '../../../objects/Paragraphs'
import { Creators as MessageCreators } from '../../../store/ducks/message'
import { Creators as ModalCreators } from '../../../store/ducks/modal'

import StyledContentMessage from './styles'

class ContentMessage extends Component {
  sendForm = async () => {
    const { validateFields, resetFields } = this.props.form
    validateFields(async (errors, values) => {
      if (!errors) {
        await this.props.messageActions.startMessage()
        await this.props.messageActions.createMessage(values)
        resetFields()
      }
    })
  }

  form = getFieldDecorator => (
    <Fragment>
      <Row bottom="1.3rem">
        <Col2 full={true}>
          <FormItem label="Nome" colon={false}>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, insira o seu nome completo.',
                  validator: validateName,
                },
              ],
              initialValue: 'Diogo Cezar',
            })(<InputModal />)}
          </FormItem>
        </Col2>
        <Col2 full={true}>
          <FormItem label="E-mail" colon={false}>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, insira o seu e-mail',
                  validator: validateEmail,
                },
              ],
              initialValue: 'diogo@diogocezar.com',
            })(<InputModal />)}
          </FormItem>
        </Col2>
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
              initialValue: 'Olá, testando uma nova mensagem!',
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
              this.props.modalActions.toggleModal('MODAL_MESSAGE', false)
            }}
            right="0"
          >
            Fechar
          </ButtonForm>
        </CenterContent>
      </Row>
    </Fragment>
  )

  loading = () => (
    <Fragment>
      <SubTitleModal>Aguarde...</SubTitleModal>
      <Paragraph color="gray">Enviando as informações!</Paragraph>
    </Fragment>
  )

  finished = (title, message) => (
    <Fragment>
      <SubTitleModal>{title}</SubTitleModal>
      <Paragraph color="gray">{message}</Paragraph>
      <CenterContent>
        <ButtonForm
          onClick={() => {
            this.props.modalActions.toggleModal('MODAL_MESSAGE', false)
            this.props.messageActions.reset()
          }}
          right="0"
        >
          Fechar
        </ButtonForm>
      </CenterContent>
    </Fragment>
  )

  render() {
    const { getFieldDecorator } = this.props.form
    const { success, loading, message } = this.props.message
    let content = null
    if (loading) content = this.loading()
    if (success && !loading && message) content = this.finished('Obrigado!', message)
    if (!success && !loading && message) content = this.finished('Oops, algo deu errado!', message)
    if (!loading && !success && !message) content = this.form(getFieldDecorator)
    return (
      <StyledContentMessage>
        <TitleModal>Mensagem para o Casal</TitleModal>
        {content}
      </StyledContentMessage>
    )
  }
}

const mapStateToProps = state => ({
  message: state.message,
  modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
  messageActions: bindActionCreators(MessageCreators, dispatch),
  modalActions: bindActionCreators(ModalCreators, dispatch),
})

const ContentMessageWithForm = Form.create()(ContentMessage)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentMessageWithForm)
