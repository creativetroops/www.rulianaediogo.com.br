import styled from 'styled-components'
import React from 'react'

const ButtonStructure = ({ className, onClick, children }) => (
  <button type="button" className={className} onClick={onClick}>
    {children}
  </button>
)

const Button = styled(ButtonStructure)`
  background-color: gray;
  padding: 15px;
  margin: 10px;
  cursor: pointer;
`

export default Button
