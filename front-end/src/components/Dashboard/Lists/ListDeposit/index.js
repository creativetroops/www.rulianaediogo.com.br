import React, { Fragment } from 'react'
import ListBase from '../ListBase'
import { SubTitleMain } from '../../../../objects/Titles'
import { Paragraph } from '../../../../objects/Paragraphs'

const ListDeposit = ({ deposits }) => (
  <Fragment>
    <SubTitleMain bottom="60px">depósitos</SubTitleMain>
    <Paragraph>Aqui estão a lista dos depósitos criados pelo site.</Paragraph>
    <ListBase data={deposits} />
  </Fragment>
)

export default ListDeposit
