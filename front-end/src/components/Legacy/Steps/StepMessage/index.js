import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import Title from '../../../objects/Title'
import Button from '../../../objects/Button'
import TextArea from '../../../objects/TextArea'
import FieldMessage from '../../../objects/FieldMessage'

class StepMessage extends Component {
  prevStep = () => {
    this.props.changeStep(this.props.step - 1)
    this.props.history.push(this.props.prevPath)
    this.props.changeError('')
  }

  nextStep = () => {
    const { message } = this.props.values
    const { messageError } = this.props.errors
    let auth = false
    if (message !== '' && !messageError) auth = true
    if (auth) {
      this.props.changeStep(this.props.step + 1)
      this.props.history.push(this.props.nextPath)
      this.props.changeError('')
    } else {
      this.props.changeError(this.props.errorStepMessage)
    }
  }

  componentDidMount() {
    if (this.props.step !== this.props.currentStep) this.props.history.push('/home')
  }

  render() {
    return (
      <Fragment>
        <Title>{this.props.title}</Title>
        <TextArea
          id="message"
          placeholder="Digite a sua mensagem"
          value={this.props.values.message}
          onChange={this.props.handleChange}
          onBlur={this.props.handleBlur}
          className={this.props.errors.message && this.props.touched.message ? '--error' : ''}
        />
        <FieldMessage
          error={this.props.errors.message}
          touched={this.props.touched.message}
          message={this.props.errors.message}
        />
        <Button
          onClick={() => {
            this.prevStep()
          }}
        >
          {this.props.buttonPrev}
        </Button>
        <Button
          onClick={() => {
            this.nextStep()
          }}
        >
          {this.props.buttonNext}
        </Button>
      </Fragment>
    )
  }
}

export default withRouter(StepMessage)
