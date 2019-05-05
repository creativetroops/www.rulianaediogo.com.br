import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { Creators as ModalCreators } from '../../../store/ducks/modal'
import { Col3, Col1, Row } from '../../Grid'
import { TitleModal } from '../../../objects/Titles'
import StyledContentDeposit from './styles'
import { FormItem, InputModal, TextAreaModal } from '../../../objects/Form'
import { CenterContent } from '../../AlignContent'
import {
  validateEmail,
  validateName,
  validateMessage,
  validatePhone,
  phoneMask,
} from '../../../helpers'
import { ButtonForm } from '../../../objects/Button'

class ContentDeposit extends Component {
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
      <StyledContentDeposit>
        <TitleModal>Depósito</TitleModal>
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
                    message: 'Por favor, o valor desejado.',
                    // validator: validatePhone,
                  },
                ],
                initialValue: '50.00',
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
                this.props.modalActions.toggleModal('MODAL_GIFT_DEPOSIT', false)
              }}
              right="0"
            >
              Fechar
            </ButtonForm>
          </CenterContent>
        </Row>
      </StyledContentDeposit>
    )
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(ModalCreators, dispatch),
})

const ContentDepositWithForm = Form.create()(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ContentDeposit),
)

export default ContentDepositWithForm
