import React from "react";
import { Section } from "../containers/Section";
import { Link, InternalLink } from "../components/Link";
import { SiteHeader } from "../components/SiteHeader";
import styled from "styled-components";

export default () => {
  return (
    <>
      <SiteHeader>Arseniy Avery (Sunny Golovine)</SiteHeader>
      <Section header="About">
        <Bio>
          My name is Arseniy Avery (I go by Sunny Golovine). I am a Web and
          Mobile developer specializing in React Native. I have worked for
          several companies in the past including OnQ and Cox Automotive where I
          helped build exceptional mobile applications.
        </Bio>
      </Section>
      <Section header="Contact Me">
        <Link to="mailto:sunny@golovinemail.org">
          Email:&nbsp;&nbsp;&nbsp;sunny@golovinemail.org
        </Link>
        <Link to="tel:1-678-646-2358">
          Phone:&nbsp;&nbsp;&nbsp;(678) 646 2358
        </Link>
      </Section>
      <Section header="Links">
        <Link to="https://linkedin.com/in/SunnyGolovine">
          Linkedin:&nbsp;&nbsp;&nbsp;SunnyGolovine
        </Link>
        <Link to="https://glvn.co">
          Website:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;glvn.co
        </Link>
        <Link to="http://github.com/sgolovine">
          Github:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sgolovine
        </Link>
        <InternalLink to="/resume">Resume</InternalLink>
      </Section>
    </>
  );
};

const Bio = styled.p`
  font-size: 18px;
  padding-left: 5px;
  padding-right: 5px;
`;
