import React, { Component } from 'react'
import { Form } from 'antd'
import { Col2, Col1, Row } from '../../Grid'
import { TitleModal } from '../../../objects/Titles'
import { FormItem, Input, TextArea } from '../../../objects/Form'
import { CenterContent } from '../../AlignContent'
import { validateEmail, validateName, validateMessage } from '../../../helpers'
import { Button } from '../../../objects/Button'

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
      </StyledContentBillet>
    )
  }
}

const ContentBilletWithForm = Form.create()(ContentBillet)

export default ContentBilletWithForm
