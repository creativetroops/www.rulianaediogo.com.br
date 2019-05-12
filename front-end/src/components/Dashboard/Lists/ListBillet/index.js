import React, { Fragment } from 'react'
import ListBase from '../ListBase'
import { SubTitleMain } from '../../../../objects/Titles'
import { Paragraph } from '../../../../objects/Paragraphs'

const ListBillet = ({ billets }) => (
  <Fragment>
    <SubTitleMain bottom="60px">boletos</SubTitleMain>
    <Paragraph>Aqui estão a lista dos boletos criados pelo site.</Paragraph>
    <ListBase data={billets} />
  </Fragment>
)

export default ListBillet
