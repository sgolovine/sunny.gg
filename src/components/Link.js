import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = ({ to, children }) => (
  <StyledLink href={to} target="_blank">
    {children}
  </StyledLink>
);

export const InternalLink = styled(RouterLink)`
  text-decoration: none;
  display: block;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 2px solid;
  border-radius: 5px;
  padding: 10px;
  color: #2176ff;
`;

const StyledLink = styled.a`
  text-decoration: none;
  display: block;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 2px solid;
  border-radius: 5px;
  padding: 10px;
  color: #2176ff;
`;
