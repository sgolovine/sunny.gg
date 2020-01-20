import React from "react";
import styled from "styled-components";
import logo from "../assets/profile.png";

export const SiteHeader = () => (
  <HeaderContainer>
    <img src={logo} alt="header-logo" height="128" width="128" />
    <HeaderText>Sunny Golovine</HeaderText>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderText = styled.p`
  font-weight: bold;
  font-size: 24px;
`;
