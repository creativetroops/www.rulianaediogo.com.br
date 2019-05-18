import React from 'react'
import ListBase from '../ListBase'
import { SubTitleMain } from '../../../../objects/Titles'
import { Paragraph } from '../../../../objects/Paragraphs'

const ListDeposit = ({ deposits }) => (
  <>
    <SubTitleMain bottom="60px">depósitos</SubTitleMain>
    <Paragraph>Aqui estão a lista dos depósitos criados pelo site.</Paragraph>
    <ListBase data={deposits} />
  </>
)

export default ListDeposit
