import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { Col2, Col1, Row } from '../../Grid'
import { TitleModal } from '../../../objects/Titles'
import { FormItem, Input, TextArea } from '../../../objects/Form'
import { CenterContent } from '../../AlignContent'
import { validateEmail, validateName, validateMessage } from '../../../helpers'
import { Button } from '../../../objects/Button'
import { Creators as MessageCreators } from '../../../store/ducks/message'

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

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <StyledContentMessage>
        <TitleModal>Mensagem para o Casal</TitleModal>
        <p>{this.props.message.message}</p>
        <Row bottom="1.3rem">
          <Col2>
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
          </Col2>
          <Col2>
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
      </StyledContentMessage>
    )
  }
}

const mapStateToProps = state => ({
  message: state.message,
})

const mapDispatchToProps = dispatch => ({
  messageActions: bindActionCreators(MessageCreators, dispatch),
})

const ContentMessageWithForm = Form.create()(ContentMessage)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentMessageWithForm)
