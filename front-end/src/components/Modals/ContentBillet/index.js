import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { Creators as ModalCreators } from '../../../store/ducks/modal'
import { Creators as GiftCreators } from '../../../store/ducks/gift'
import { Col2, Col1, Row } from '../../Grid'
import { TitleModal } from '../../../objects/Titles'
import { FormItem, InputModal, TextAreaModal } from '../../../objects/Form'
import { CenterContent } from '../../AlignContent'
import { ButtonForm } from '../../../objects/Button'
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
        await this.props.giftActions.createGiftBillet(values)
        resetFields()
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <StyledContentBillet>
        <TitleModal>Boleto Bancário</TitleModal>
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
                initialValue: '19/02/1986',
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
                initialValue: '046.351.449-17',
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
                initialValue: '50,00',
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
