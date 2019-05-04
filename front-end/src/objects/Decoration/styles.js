import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledDecoration = styled.div`
  background-image: url('/assets/images/red-decoration.svg');
  position: absolute;
  opacity: ${({ opacity }) => opacity || '0.1'};
  top: ${({ top }) => top || '0'};
  ${({ right, left }) => {
    if (right) return `right: ${right}`
    if (left) return `left: ${left}`
  }}
  height: ${({ height }) => height || '1700px'};
  width: ${({ width }) => width || '1700px'};
  z-index: 10 !important;
  background-size: cover;
  background-position-x: ${({ positionX }) => positionX || '-1200px'};
  background-position-y: ${({ positionY }) => positionY || '-600px'};
  background-repeat: no-repeat;
  @media ${devices.laptopLarge} {
    display:none;
  }
`

export default StyledDecoration
