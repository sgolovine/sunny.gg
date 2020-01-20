import React from "react";
import styled from "styled-components";

export const AppContainer = ({ children }) => (
  <OuterContainer>
    <InnerContainer>{children}</InnerContainer>
  </OuterContainer>
);

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 400px;
`;
