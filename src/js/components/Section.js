import React from 'react'
import styled from 'styled-components'

export default ({ title, children }) => (
  <SectionContainer>
    <SectionHeader>{title}</SectionHeader>
    <SectionDivider />
    <SectionContent>{children}</SectionContent>
  </SectionContainer>
)

const SectionContainer = styled.div`
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
  max-width: 400px;
`

const SectionDivider = styled.hr`
  color: #393e46;
`

const SectionHeader = styled.h1`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #393e46;
`

const SectionContent = styled.div``
