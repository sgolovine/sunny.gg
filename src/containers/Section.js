import React from "react";
import styled from "styled-components";

export const Section = ({ header, children }) => {
  return (
    <SectionContainer>
      <Header>{header}</Header>
      <Divider />
      {children}
    </SectionContainer>
  );
};

const SectionContainer = styled.div``;

const Header = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 0;
  color: #252525;
`;

const Divider = styled.hr`
  color: #4f5157;
  height: 0.25px;
`;
