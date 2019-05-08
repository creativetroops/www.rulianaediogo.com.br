import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { Creators as ModalCreators } from '../../../store/ducks/modal'
import { Creators as GiftCreators } from '../../../store/ducks/gift'
import { Col3, Col1, Row } from '../../Grid'
import { TitleModal, SubTitleModal } from '../../../objects/Titles'
import StyledContentDeposit from './styles'
import { FormItem, InputModal, TextAreaModal } from '../../../objects/Form'
import { CenterContent } from '../../AlignContent'
import { Paragraph, ParagraphFeedBack } from '../../../objects/Paragraphs'
import {
  validateEmail,
  validateName,
  validateMessage,
  validatePhone,
  validateValue,
  phoneMask,
} from '../../../helpers'
import { ButtonForm } from '../../../objects/Button'

class ContentDeposit extends Component {
  handlePhoneChange = e => phoneMask(e.target.value)

  sendForm = async () => {
    const { validateFields, resetFields } = this.props.form
    validateFields(async (errors, values) => {
      if (!errors) {
        await this.props.giftActions.startGiftDeposit()
        await this.props.giftActions.createGiftDeposit(values)
        resetFields()
      }
    })
  }

  form = getFieldDecorator => (
    <Fragment>
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
              initialValue: 'Diogo Cezar',
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
              initialValue: 'diogo@diogocezar.com',
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
              initialValue: '(43) 93300-0663',
              getValueFromEvent: this.handlePhoneChange,
            })(<InputModal />)}
          </FormItem>
        </Col3>
      </Row>
      <Row bottom="1.3rem">
        <Col1>
          <FormItem label="Valor" colon={false}>
            {getFieldDecorator('value', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, um valor válido.',
                  validator: validateValue,
                },
              ],
              initialValue: '50,00',
            })(<InputModal />)}
          </FormItem>
        </Col1>
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
              initialValue: 'Testando uma mensagem!',
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
              this.props.modalActions.toggleModal('MODAL_GIFT_DEPOSIT', false)
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
      {(this.props.gift.successDeposit && (
        <Fragment>
          <ParagraphFeedBack>
            Oba! Seu presente foi contabilizado com <strong>sucesso!</strong>
          </ParagraphFeedBack>
          <ParagraphFeedBack>Agora é só fazer uma transferência para:</ParagraphFeedBack>
          <ParagraphFeedBack>Banco do Brasil</ParagraphFeedBack>
          <ParagraphFeedBack>
            Agência: <strong>3509-3</strong>
          </ParagraphFeedBack>
          <ParagraphFeedBack>
            Conta Corrente: <strong>35845-2</strong>
          </ParagraphFeedBack>
          <ParagraphFeedBack bottom="2rem">
            Valor: <strong>R$ {this.props.gift.valueDeposit}</strong>
          </ParagraphFeedBack>
          <ParagraphFeedBack bottom="3.5rem">
            Também te enviamos um <strong>e-mail</strong> para lembrar de efetuar o depósito!
          </ParagraphFeedBack>
        </Fragment>
      )) || <Paragraph color="gray">Não foi possível criar o depósito.</Paragraph>}
      <CenterContent>
        <ButtonForm
          bottom="2rem"
          onClick={() => {
            this.props.modalActions.toggleModal('MODAL_GIFT_DEPOSIT', false)
            this.props.giftActions.resetDeposit()
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
    const {
      successDeposit: success,
      loadingDeposit: loading,
      messageDeposit: message,
    } = this.props.gift
    let content = null
    if (loading) content = this.loading()
    if (success && !loading && message) content = this.finished('Obrigado!', message)
    if (!success && !loading && message) content = this.finished('Oops, algo deu errado!', message)
    if (!loading && !success && !message) content = this.form(getFieldDecorator)
    return (
      <StyledContentDeposit>
        <TitleModal>Depósito</TitleModal>
        {content}
      </StyledContentDeposit>
    )
  }
}

const mapStateToProps = state => ({
  gift: state.gift,
  modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(ModalCreators, dispatch),
  giftActions: bindActionCreators(GiftCreators, dispatch),
})

const ContentDepositWithForm = Form.create()(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ContentDeposit),
)

export default ContentDepositWithForm
