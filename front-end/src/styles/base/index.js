import { createGlobalStyle } from 'styled-components'
import { devices } from '../devices'

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
  .ant-form-explain {
    margin-top: 0.2rem!important;
    font-size: 0.8rem!important;
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
    @media ${devices.mobileLarge} {
      margin-top: 0px !important;
      margin-bottom: 5px !important;
      height: 12px !important;
      line-height: 12px !important;
    }
  }
`

export default Base
