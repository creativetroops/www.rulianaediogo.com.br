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

export { StyledTitleMain, StyledSubTitleMain, StyledTitleInternal }
