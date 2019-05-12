import React from 'react'

import {
  StyledTitleMain,
  StyledSubTitleMain,
  StyledTitleInternal,
  StyledTitleInternalDecoration,
  StyledTitleModal,
  StyledSubTitleModal,
} from './styles'

const TitleMain = props => <StyledTitleMain>{props.children}</StyledTitleMain>
const SubTitleMain = props => <StyledSubTitleMain {...props}>{props.children}</StyledSubTitleMain>
const TitleInternal = props => <StyledTitleInternal>{props.children}</StyledTitleInternal>
const TitleInternalDecoration = props => (
  <StyledTitleInternalDecoration>{props.children}</StyledTitleInternalDecoration>
)
const TitleModal = props => <StyledTitleModal>{props.children}</StyledTitleModal>
const SubTitleModal = props => <StyledSubTitleModal>{props.children}</StyledSubTitleModal>

export {
  TitleMain,
  SubTitleMain,
  TitleInternal,
  TitleInternalDecoration,
  TitleModal,
  SubTitleModal,
}
