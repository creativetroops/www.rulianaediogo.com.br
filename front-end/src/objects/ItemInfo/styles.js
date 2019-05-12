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
  width: 125px;
  height: 125px;
  @media ${devices.mobileLarge} {
    width: 85px;
    height: 85px;
    margin-bottom: 15px;
  }
`

const StyledTitleItemInfo = styled.h3`
  text-transform: uppercase;
  color: ${({ actived }) => (actived ? 'var(--color-green)' : 'var(--color-white)')};
  @media ${devices.mobileLarge} {
    font-size: 0.9rem;
  }
`

export { StyledWrapperItemInfo, StyledImageItemInfo, StyledTitleItemInfo }
