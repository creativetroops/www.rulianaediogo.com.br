import React from 'react'

import {
  StyledTitleMain,
  StyledSubTitleMain,
  StyledTitleInternal,
  StyledTitleInternalDecoration,
  StyledTitleModal,
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
const TitleModal = props => (
  <StyledTitleModal>{props.children}</StyledTitleModal>
)

export {
  TitleMain,
  SubTitleMain,
  TitleInternal,
  TitleInternalDecoration,
  TitleModal,
}
