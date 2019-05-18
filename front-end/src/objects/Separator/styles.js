import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledSeparator = styled.section`
  position: relative;
  height: 800px;
  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(rgba(54, 95, 79, 0.56), rgba(14, 13, 15, 0.64)),
    url(${({ src }) => src});
  filter: grayscale(100%);
  transition: all 0.25s linear;
  box-shadow: -15px 20px 50px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    filter: grayscale(0%);
  }
  @media ${devices.laptopLarge} {
    height: 600px;
  }
  @media ${devices.laptop} {
    height: 400px;
  }
  @media ${devices.mobileLarge} {
    height: 350px;
  }
`

export default StyledSeparator
