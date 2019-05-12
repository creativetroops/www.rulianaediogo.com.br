import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { Creators as AuthCreators } from '../../store/ducks/auth'
import { FormItem, InputModal } from '../../objects/Form'
import { CenterContent } from '../../components/AlignContent'
import { ButtonLogin } from '../../objects/Button'
import { Row } from '../../components/Grid'

import StyledLogin from './styles'

import { validateEmail } from '../../helpers'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  login = async () => {
    const { validateFields, resetFields } = this.props.form
    validateFields(async (errors, values) => {
      if (!errors) {
        this.props.authActions.startLoginLogout()
        this.props.authActions.login(this.state)
        resetFields()
      }
    })
  }

  form = (getFieldDecorator, disabled) => (
    <Fragment>
      <Row bottom="1.3rem">
        <FormItem label="Email" colon={false}>
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: 'Qual o seu e-mail?',
                validator: validateEmail,
              },
            ],
          })(<InputModal onChange={this.handleChange} disabled={disabled} />)}
        </FormItem>
        <FormItem label="Senha" colon={false}>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Qual a sua senha?',
              },
            ],
          })(<InputModal type="password" onChange={this.handleChange} disabled={disabled} />)}
        </FormItem>
      </Row>
      <Row>
        <CenterContent>
          <ButtonLogin
            bottom="2rem"
            color="gray"
            disabled={disabled}
            onClick={() => {
              this.login()
            }}
            right="0"
          >
            Entrar
          </ButtonLogin>
        </CenterContent>
      </Row>
    </Fragment>
  )

  render() {
    const { auth, message, loading: disabled } = this.props
    const { getFieldDecorator } = this.props.form
    if (auth.uid) return <Redirect to="/dashboard" />
    return (
      <StyledLogin>
        <img className="login-logo" src="/assets/images/red-logo.svg" alt="Logo Ruliana & Diogo" />
        <div className="login-container">
          {this.form(getFieldDecorator, disabled)}
          <div className="login-message">{message}</div>
        </div>
      </StyledLogin>
    )
  }
}

const mapStateToProps = state => ({
  message: state.auth.message,
  loading: state.auth.loading,
  auth: state.firebase.auth,
})

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(AuthCreators, dispatch),
})

const LoginWithForm = Form.create()(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login),
)

export default LoginWithForm
