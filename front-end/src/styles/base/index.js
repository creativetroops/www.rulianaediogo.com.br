import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
  #root{
    height: 100%;
  }
	body{
    background-color: var(--color-background-gray);
		font-size: 14px;
    height: 100%;
	}
`

export default Base
