import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { Creators as ModalCreators } from '../../../store/ducks/modal'
import { Col3, Col1, Row } from '../../Grid'
import { TitleModal } from '../../../objects/Titles'
import { FormItem, InputModal, TextAreaModal } from '../../../objects/Form'
import { CenterContent } from '../../AlignContent'
import { ButtonForm } from '../../../objects/Button'
import {
  validateEmail,
  validateName,
  validateMessage,
  validatePhone,
  phoneMask,
} from '../../../helpers'

import StyledContentBillet from './styles'

class ContentBillet extends Component {
  sendForm = () => {
    const { validateFields, resetFields } = this.props.form
    validateFields((errors, values) => {
      if (errors) {
        global.console.log('Houveram erros')
        global.console.log(errors)
        return
      }
      global.console.log(values)
      resetFields()
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <StyledContentBillet>
        <TitleModal>Boleto Bancário</TitleModal>
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
          <Col3>
            <FormItem label="Data de Nascimento" colon={false}>
              {getFieldDecorator('birth', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor, insira sua data de nascimento.',
                    // validator: validateName,
                  },
                ],
                initialValue: '19/02/1986',
              })(<InputModal />)}
            </FormItem>
          </Col3>
          <Col3>
            <FormItem label="CPF" colon={false}>
              {getFieldDecorator('cpf', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor, insira o seu cpf',
                    // validator: validateEmail,
                  },
                ],
                initialValue: '046.351.449-17',
              })(<InputModal />)}
            </FormItem>
          </Col3>
          <Col3>
            <FormItem label="Valor" colon={false}>
              {getFieldDecorator('value', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor, o valor desejado.',
                    // validator: validatePhone,
                  },
                ],
                initialValue: '50.00',
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
  modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(ModalCreators, dispatch),
})

const ContentBilletWithForm = Form.create()(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ContentBillet),
)

export default ContentBilletWithForm
