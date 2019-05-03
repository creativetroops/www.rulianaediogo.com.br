import React from 'react'

import {
  StyledTitleMain,
  StyledSubTitleMain,
  StyledTitleInternal,
  StyledTitleInternalDecoration,
} from './styles'

const TitleMain = props => <StyledTitleMain>{props.children}</StyledTitleMain>
const SubTitleMain = props => (
  <StyledSubTitleMain>{props.children}</StyledSubTitleMain>
)
const TitleInternal = props => (
  <StyledTitleInternal>{props.children}</StyledTitleInternal>
)
const TitleInternalDecoration = props => (
  <StyledTitleInternalDecoration>
    {props.children}
  </StyledTitleInternalDecoration>
)

export {
  TitleMain, SubTitleMain, TitleInternal, TitleInternalDecoration,
}
