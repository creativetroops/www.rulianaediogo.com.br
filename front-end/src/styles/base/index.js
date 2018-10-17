import { createGlobalStyle } from 'styled-components'

const Base = createGlobalStyle`
	body{
		font-size: 14px;
	}
	.--error{
		border-color: red!important;
	}
`

export default Base