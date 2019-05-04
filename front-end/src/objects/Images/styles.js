import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledImageMain = styled.img`
  margin-bottom: 60px;
  @media ${devices.laptop} {
    width: 100px;
    height: 100px;
    margin-bottom: 50px;
  }
  @media ${devices.mobileLarge} {
    width: 80px;
    height: 80px;
  }
`

const StyledImageInternal = styled.img`
  margin-top: 60px;
  margin-bottom: 30px;
`

export { StyledImageMain, StyledImageInternal }
