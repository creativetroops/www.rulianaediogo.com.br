import styled from 'styled-components'
import { devices } from '../../styles/devices'

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
  position: relative;
  float: left;
  width: 80%;
  border-radius: 0px;
  padding: 20px 30px;
  background-color: var(--color-white);
  box-shadow: -15px 20px 50px 0 rgba(0, 0, 0, 0.2);
  z-index: 99999 !important;
  @media ${devices.tablet} {
    height: 100vh;
    width: 100vw;
    display: flex;
    padding: 20px;
  }
`

const StyledButtonClose = styled.div`
  cursor: pointer;
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  transition: all 0.25s ease-in-out;
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    opacity: 1;
  }
`

export { StyledModal, StyledModalMain, StyledButtonClose }
