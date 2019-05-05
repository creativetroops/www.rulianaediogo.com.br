import React from 'react'
import { Form as FormAntd, Input as InputAntd } from 'antd'
import {
  StyledFormItem,
  StyledInput,
  StyledInputModal,
  StyledTextArea,
  StyledTextAreaModal,
} from './styles'

const FormItemStyled = StyledFormItem(FormAntd.Item)
const InputStyled = StyledInput(InputAntd)
const InputModalStyled = StyledInputModal(InputAntd)
const TextAreaStyled = StyledTextArea(InputAntd.TextArea)
const TextAreaStyledModal = StyledTextAreaModal(InputAntd.TextArea)

const FormItem = props => <FormItemStyled {...props} />
const Input = React.forwardRef((props, ref) => <InputStyled {...props} ref={ref} />)
const InputModal = React.forwardRef((props, ref) => <InputModalStyled {...props} ref={ref} />)
const TextArea = React.forwardRef((props, ref) => <TextAreaStyled {...props} ref={ref} />)
const TextAreaModal = React.forwardRef((props, ref) => <TextAreaStyledModal {...props} ref={ref} />)

export {
  FormItem, TextArea, Input, InputModal, TextAreaModal,
}
