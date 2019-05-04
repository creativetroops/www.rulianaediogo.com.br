import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { Col3, Col1, Row } from '../../Grid'
import { TitleModal } from '../../../objects/Titles'
import StyledContentRsvp from './styles'
import { FormItem, Input, TextArea } from '../../../objects/Form'
import { Creators as RsvpCreators } from '../../../store/ducks/rsvp'
import { CenterContent } from '../../AlignContent'
import {
  validateEmail,
  validateName,
  validateMessage,
  validatePhone,
  phoneMask,
} from '../../../helpers'
import { Button } from '../../../objects/Button'

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

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <StyledContentRsvp>
        <TitleModal>Confirmação de Presença</TitleModal>
        <p>{this.props.rsvp.message}</p>
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
              })(<Input />)}
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
              })(<Input />)}
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
              })(<Input />)}
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
              })(<TextArea />)}
            </FormItem>
          </Col1>
        </Row>
        <Row bottom="1.3rem" top="2rem">
          <CenterContent>
            <Button onClick={this.sendForm} right="0">
              Send
            </Button>
          </CenterContent>
        </Row>
      </StyledContentRsvp>
    )
  }
}

const mapStateToProps = state => ({
  rsvp: state.rsvp,
})

const mapDispatchToProps = dispatch => ({
  rsvpActions: bindActionCreators(RsvpCreators, dispatch),
})

const ContentRsvpWithForm = Form.create()(ContentRsvp)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentRsvpWithForm)
