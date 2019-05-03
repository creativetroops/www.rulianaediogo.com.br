import styled from 'styled-components'

const StyledContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`

const StyledButton = styled.button`
  background-color: var(--color-white);
  border-radius: 35px;
  width: 240px;
  padding: 5px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 45px;
  cursor: pointer;
  border: none;
  margin-right: 30px;
  transition: all 0.15s ease-in-out;
  border: 2px solid var(--color-white);
  &:last-child {
    margin-right: 0px !important;
  }
  &:hover {
    background-color: transparent;
    border: 2px solid var(--color-green);
    color: var(--color-white);
  }
`

export { StyledButton, StyledContainerButtons }
