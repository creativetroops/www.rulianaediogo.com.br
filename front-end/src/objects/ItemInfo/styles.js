import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledWrapperItemInfo = styled.div`
  margin-top: 30px;
  @media ${devices.laptop} {
    flex: 1 0 50%;
  }
`

const StyledImageItemInfo = styled.img`
  margin-bottom: 30px;
  cursor: pointer;
`

const StyledTitleItemInfo = styled.h3`
  text-transform: uppercase;
  color: var(--color-white);
`

export { StyledWrapperItemInfo, StyledImageItemInfo, StyledTitleItemInfo }
