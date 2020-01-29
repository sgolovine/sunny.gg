import React from 'react'
import styled from 'styled-components'
import { StyledLink } from './Link'
import { FiDownload } from 'react-icons/fi'

export default () => {
  const vcard = require('vcard.vcf')
  return (
    <VCardLink href={vcard}>
      <FiDownload />
      &nbsp;Add to Contacts
    </VCardLink>
  )
}

const VCardLink = styled(StyledLink)`
  justify-content: center;
`
