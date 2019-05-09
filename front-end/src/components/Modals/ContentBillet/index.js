import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { Creators as ModalCreators } from '../../../store/ducks/modal'
import { Creators as GiftCreators } from '../../../store/ducks/gift'
import { Col2, Col1, Row } from '../../Grid'
import { TitleModal, SubTitleModal } from '../../../objects/Titles'
import { FormItem, InputModal, TextAreaModal } from '../../../objects/Form'
import { CenterContent } from '../../AlignContent'
import { ButtonForm } from '../../../objects/Button'
import { Paragraph, ParagraphFeedBack } from '../../../objects/Paragraphs'
import {
  validateEmail,
  validateName,
  validateMessage,
  validatePhone,
  validateCpf,
  validateDate,
  validateValue,
  phoneMask,
  dateMask,
  cpfMask,
} from '../../../helpers'

import StyledContentBillet from './styles'

class ContentBillet extends Component {
  handlePhoneChange = e => phoneMask(e.target.value)

  handleDateChange = e => dateMask(e.target.value)

  handleCpfChange = e => cpfMask(e.target.value)

  sendForm = async () => {
    const { validateFields, resetFields } = this.props.form
    validateFields(async (errors, values) => {
      if (!errors) {
        await this.props.giftActions.startGiftBillet()
        window.PagSeguroDirectPayment.onSenderHashReady(async (response) => {
          const newValues = values
          if (response.status !== 'error' && response.senderHash) {
            this.setState({
              senderHash: response.senderHash,
            })
            newValues.senderHash = response.senderHash
            await this.props.giftActions.createGiftBillet(newValues)
          }
        })

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
              initialValue: 'Mario Sergio Batista',
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
              initialValue: 'xgordo@gmail.com',
            })(<InputModal />)}
          </FormItem>
        </Col2>
      </Row>
      <Row bottom="1.3rem">
        <Col2>
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
        </Col2>
        <Col2>
          <FormItem label="Data de Nascimento" colon={false}>
            {getFieldDecorator('birth', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, insira sua data de nascimento.',
                  validator: validateDate,
                },
              ],
              getValueFromEvent: this.handleDateChange,
              initialValue: '19/02/1953',
            })(<InputModal />)}
          </FormItem>
        </Col2>
      </Row>
      <Row bottom="1.3rem">
        <Col2>
          <FormItem label="CPF" colon={false}>
            {getFieldDecorator('cpf', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, insira o seu cpf',
                  validator: validateCpf,
                },
              ],
              getValueFromEvent: this.handleCpfChange,
              initialValue: '365.088.110-10',
            })(<InputModal />)}
          </FormItem>
        </Col2>
        <Col2>
          <FormItem label="Valor" colon={false}>
            {getFieldDecorator('value', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, um valor válido.',
                  validator: validateValue,
                },
              ],
              initialValue: '10,00',
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
              this.props.modalActions.toggleModal('MODAL_GIFT_BILLET', false)
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
      {(this.props.gift.successBillet && (
        <Fragment>
          <ParagraphFeedBack bottom="2rem">
            Oba! Seu presente foi contabilizado com <strong>sucesso!</strong>
          </ParagraphFeedBack>
          <ParagraphFeedBack bottom="2.5rem">Agora é só fazer pagar o boleto</ParagraphFeedBack>
          <CenterContent>
            <a
              href={this.props.gift.informationBillet.infos.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonForm bottom="2rem" top="1rem" right="0">
                Abrir Boleto
              </ButtonForm>
            </a>
          </CenterContent>
          <ParagraphFeedBack bottom="2rem">
            Valor: <strong>R$ {this.props.gift.informationBillet.infos.grossAmount}</strong>
          </ParagraphFeedBack>
          <ParagraphFeedBack bottom="3.5rem">
            Também te enviamos um <strong>e-mail</strong> com o link do boleto!
          </ParagraphFeedBack>
        </Fragment>
      )) || <Paragraph color="gray">Não foi possível criar o boleto.</Paragraph>}
      <CenterContent>
        <ButtonForm
          bottom="2rem"
          onClick={() => {
            this.props.modalActions.toggleModal('MODAL_GIFT_BILLET', false)
            this.props.giftActions.resetBillet()
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
      successBillet: success,
      loadingBillet: loading,
      messageBillet: message,
    } = this.props.gift
    let content = null
    if (loading) content = this.loading()
    if (success && !loading && message) content = this.finished('Obrigado!', message)
    if (!success && !loading && message) content = this.finished('Oops, algo deu errado!', message)
    if (!loading && !success && !message) content = this.form(getFieldDecorator)
    return (
      <StyledContentBillet>
        <TitleModal>Boleto Bancário</TitleModal>
        {content}
      </StyledContentBillet>
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

const ContentBilletWithForm = Form.create()(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ContentBillet),
)

export default ContentBilletWithForm
