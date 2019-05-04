import React from 'react'
import ComponentMessage from '../ComponentMessage'

const FieldMessage = props => (
    <ComponentMessage>
      {props.error && props.touched && <div className="error-message">{props.message}</div>}
    </ComponentMessage>
)

export default FieldMessage
