import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledTitleMain = styled.h1`
  font-family: 'Niagara';
  font-size: 9rem;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: 0;
  line-height: 120px;
  @media ${devices.laptop} {
    font-size: 7rem;
    line-height: 100px;
  }
  @media ${devices.mobileLarge} {
    font-size: 4rem;
    line-height: 80px;
  }
`

const StyledSubTitleMain = styled.h2`
  font-family: 'Champignon';
  font-size: 7rem;
  text-transform: lowercase;
  color: var(--color-green);
  font-weight: normal;
  line-height: 1rem;
  margin-bottom: 100px;
  @media ${devices.laptop} {
    font-size: 5rem;
    line-height: 0.5rem;
  }
  @media ${devices.mobileLarge} {
    font-size: 4rem;
    line-height: 0rem;
  }
`

const StyledTitleInternal = styled.h3`
  font-family: 'Niagara';
  font-size: 5rem;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: 0;
  line-height: 60px;
  letter-spacing: 1px;
  @media ${devices.laptop} {
    font-size: 4rem;
  }
  @media ${devices.mobileLarge} {
    font-size: 3rem;
  }
`

const StyledTitleInternalDecoration = styled(StyledTitleInternal)`
  position: relative;
  float: left;
  width: 100%;
  margin-bottom: 100px;
  &:after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: var(--color-green-light);
    position: absolute;
    left: 50%;
    bottom: -40px;
    border-radius: 10px;
    transform: translateX(-50%);
  }
`

const StyledTitleModal = styled.h1`
  font-family: 'Niagara';
  font-size: 3.5rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-gray);
  margin-bottom: 0;
  line-height: 120px;
  @media ${devices.laptop} {
    font-size: 7rem;
    line-height: 100px;
  }
  @media ${devices.mobileLarge} {
    font-size: 4rem;
    line-height: 80px;
  }
`

export {
  StyledTitleMain,
  StyledSubTitleMain,
  StyledTitleInternal,
  StyledTitleInternalDecoration,
  StyledTitleModal,
}
