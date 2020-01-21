import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default ({ name, detail, href, icon }) => (
  <StyledLink href={href} target="_blank">
    <Left>
      {icon}
      <LinkText>{name}:&nbsp;</LinkText>
    </Left>
    <p>{detail}</p>
  </StyledLink>
)

export const InternalLink = ({ name, href, icon }) => (
  <StyledInternalLink to={href}>
    {icon}
    <LinkText>&nbsp;{name}</LinkText>
  </StyledInternalLink>
)

export const StyledLink = styled.a`
  display: block;
  border: 1.5px solid;
  margin: 0.5em;
  padding: 0.7em;
  text-decoration: none;
  font-size: 18px;
  color: #3490de;
  display: flex;
  justify-content: space-between;
`

const StyledInternalLink = styled(Link)`
  display: block;
  border: 1.5px solid;
  margin: 0.5em;
  padding: 0.7em;
  text-decoration: none;
  font-size: 18px;
  color: #3490de;
  display: flex;
  justify-content: center;
`

const Left = styled.div`
  display: flex;
  flex-direction: row;
`
const LinkText = styled.p`
  margin-left: 5px;
`
