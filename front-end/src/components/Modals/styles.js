import styled from 'styled-components'

const StyledModal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99999 !important;
  &.show {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const StyledModalMain = styled.div`
  min-width: 80%;
  border-radius: 15px;
  padding: 20px;
  background-color: var(--color-white);
  z-index: 99999 !important;
`

export { StyledModal, StyledModalMain }
