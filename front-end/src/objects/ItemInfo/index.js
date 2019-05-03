import React from 'react'
import {
  StyledWrapperItemInfo,
  StyledImageItemInfo,
  StyledTitleItemInfo,
} from './styles'

const ItemInfo = ({ src, children, onClick }) => (
  <StyledWrapperItemInfo onClick={onClick}>
    <StyledImageItemInfo src={src} />
    <StyledTitleItemInfo>{children}</StyledTitleItemInfo>
  </StyledWrapperItemInfo>
)

export default ItemInfo
