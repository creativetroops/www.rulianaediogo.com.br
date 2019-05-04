import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => `var(--color-${bg || 'gray'})`};
`

const StyledSection = styled.section`
  position: relative;
  float: left;
  padding-top: 100px;
  padding-bottom: 100px;
  width: 1000px;
  text-align: center;
  @media ${devices.laptop} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media ${devices.mobileLarge} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  box-shadow: -15px 20px 50px 0 rgba(0, 0, 0, 0.2);
`

export { StyledContainer, StyledSection }
