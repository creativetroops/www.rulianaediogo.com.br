import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    display: inline-block !important;
    margin-right: 30px;
    @media ${devices.laptop} {
      flex: 1 0 100%;
      margin-right: 0px !important;
      margin-bottom: 30px;
    }
    @media ${devices.mobileLarge} {
      margin-bottom: 0px;
    }
  }
  a:last-child {
    margin-right: 0px;
  }
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
  color: var(--color-gray);
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
  @media ${devices.laptop} {
    width: 40% !important;
    margin-bottom: 30px;
  }
  @media ${devices.tablet} {
    width: 65% !important;
    margin-right: 0px !important;
  }
  @media ${devices.mobileLarge} {
    height: 50px;
    line-height: 35px;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
`

const StyledTransparentButton = styled.button`
  background-color: transparent;
  border: 2px solid var(--color-green) !important;
  color: var(--color-white);
  border-radius: 35px;
  width: 240px;
  padding: 5px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 45px;
  cursor: pointer;
  border: none;
  margin-right: 30px !important;
  transition: all 0.15s ease-in-out;
  &:last-child {
    margin-right: 0px !important;
  }
  &:hover {
    background-color: var(--color-white);
    border: 2px solid var(--color-white) !important;
    color: var(--color-gray);
  }
  @media ${devices.laptop} {
    width: 40% !important;
    margin-bottom: 30px;
  }
  @media ${devices.tablet} {
    width: 65% !important;
    margin-right: 0px !important;
  }
  @media ${devices.mobileLarge} {
    height: 50px;
    line-height: 35px;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
`

const StyledFormButton = styled.button`
  background-color: var(--color-green);
  color: var(--color-white);
  border-radius: 35px;
  width: 240px;
  padding: 5px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 45px;
  cursor: pointer;
  border: none;
  margin-right: 30px !important;
  margin-bottom: ${({ bottom }) => bottom || '0px'};
  transition: all 0.15s ease-in-out;
  &:last-child {
    margin-right: 0px !important;
  }
  &:hover {
    background-color: var(--color-gray);
    color: var(--color-white);
  }
  @media ${devices.laptop} {
    width: 40% !important;
    margin-bottom: 30px;
  }
  @media ${devices.tablet} {
    width: 50% !important;
    margin-right: 0px !important;
  }
  @media ${devices.mobileLarge} {
    min-width: 170px !important;
    height: 50px;
    line-height: 35px;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
`

const StyledLoginButton = styled(StyledFormButton)`
  background-color: var(--color-green);
  border: 2px solid var(--color-green) !important;
  margin-bottom: 0px;
  margin-top: 30px;
  &:hover {
    border: 2px solid var(--color-green) !important;
    color: var(--color-white);
  }
`

export {
  StyledButton,
  StyledContainerButtons,
  StyledTransparentButton,
  StyledFormButton,
  StyledLoginButton,
}
