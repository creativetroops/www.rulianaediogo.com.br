import styled from 'styled-components'

const StyledTitleMain = styled.h1`
  font-family: 'Niagara';
  font-size: 9rem;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: 0;
  line-height: 120px;
`

const StyledSubTitleMain = styled.h2`
  font-family: 'Champignon';
  font-size: 7rem;
  text-transform: lowercase;
  color: var(--color-green);
  font-weight: normal;
  line-height: 1rem;
  margin-bottom: 100px;
`

const StyledTitleInternal = styled.h3`
  font-family: 'Niagara';
  font-size: 5rem;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: 0;
  line-height: 60px;
  letter-spacing: 1px;
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

export {
  StyledTitleMain,
  StyledSubTitleMain,
  StyledTitleInternal,
  StyledTitleInternalDecoration,
}
