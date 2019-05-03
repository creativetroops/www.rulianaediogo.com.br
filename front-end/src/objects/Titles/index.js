import React from 'react'

import {
  StyledTitleMain,
  StyledSubTitleMain,
  StyledTitleInternal,
} from './styles'

const TitleMain = props => <StyledTitleMain>{props.children}</StyledTitleMain>
const SubTitleMain = props => (
  <StyledSubTitleMain>{props.children}</StyledSubTitleMain>
)
const TitleInternal = props => (
  <StyledTitleInternal>{props.children}</StyledTitleInternal>
)

export { TitleMain, SubTitleMain, TitleInternal }
