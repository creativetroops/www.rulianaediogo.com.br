import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import giftConfig from '../../../configs/giftConfig'

import Title from '../../../objects/Title'
import Button from '../../../objects/Button'

class StepValue extends Component {
  state = {}

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  prevStep = () => {
    this.props.changeStep(this.props.step - 1)
    this.props.history.push(this.props.prevPath)
    this.props.changeError('')
  }

  nextStep = () => {
    this.props.setValue(this.state.value)
    this.props.values.value = this.state.value
    this.props.changeStep(this.props.step + 1)
    this.props.history.push(this.props.nextPath)
    this.props.changeError('')
  }

  componentDidMount() {
    this.setState({
      value: giftConfig.selectedValue,
    })
    if (this.props.step !== this.props.currentStep) this.props.history.push('/home')
  }

  render() {
    return (
      <Fragment>
        <Title>{this.props.title}</Title>
        <div className="range-field">
          <h4>R$ {this.state.value}</h4>
          <input
            type="range"
            id="value"
            value={this.state.value}
            step={giftConfig.step}
            min={giftConfig.minValue}
            max={giftConfig.maxValue}
            onChange={this.handleChange}
          />
        </div>
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

export default withRouter(StepValue)
