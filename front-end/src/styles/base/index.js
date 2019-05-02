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
`

export default Base
