import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
  #root{
    font-size: 14px!important;
    height: 100%;
  }
	body{
    background-color: var(--color-gray);
    height: 100%;
    font-family: 'Montserrat', sans-serif;
	}
  textarea{
    resize: none!important;
  }
  .has-error .ant-form-explain, .has-error .ant-form-split {
    margin-top: 0.5rem;
    font-size: 1rem!important;
    color: var(--color-green)!important;
  }
  .has-error .ant-input{
    border-color: var(--color-green)!important;
  }
  .ant-form-item-label{
    margin-top: 0px !important;
    margin-bottom: 7px !important;
    height: 20px !important;
    line-height: 20px !important;
  }
`

export default Base
