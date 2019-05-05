import styled from 'styled-components'

const StyledFormItem = FormItem => styled(FormItem)`
  margin-bottom: 5px !important;
  position: relative;
  float: left;
  width: 100%;
  label {
    font-family: 'Montserrat' !important;
    font-size: 1rem;
    font-style: normal;
    font-weight: bold;
    color: var(--color-gray) !important;
    text-transform: uppercase !important;
    margin-right: 10px;
    &:before {
      display: none !important;
    }
  }
`

const StyledInput = Input => styled(Input)`
  width: 100% !important;
  border-radius: 0px !important;
  height: 60px !important;
  padding: 5px 10px !important;
  color: var(--color-gray) !important;
  font-family: 'Montserrat' !important;
  font-weight: bold !important;
  font-size: 1.3rem !important;
`

const StyledInputModal = Input => styled(Input)`
  width: 100% !important;
  border-radius: 0px !important;
  height: 45px !important;
  padding: 5px 10px !important;
  color: var(--color-gray) !important;
  font-family: 'Montserrat' !important;
  font-weight: 500 !important;
  font-size: 1rem !important;
`

const StyledTextArea = TextArea => styled(TextArea)`
  width: 100% !important;
  border-radius: 0px !important;
  height: 90px !important;
  padding: 5px 10px !important;
  color: var(--color-gray) !important;
  font-family: 'Montserrat' !important;
  font-size: 1rem !important;
`

const StyledTextAreaModal = TextArea => styled(TextArea)`
  width: 100% !important;
  border-radius: 0px !important;
  height: 90px !important;
  padding: 5px 10px !important;
  color: var(--color-gray) !important;
  font-family: 'Montserrat' !important;
  font-size: 1rem !important;
`

export {
  StyledFormItem, StyledInput, StyledInputModal, StyledTextArea, StyledTextAreaModal,
}
