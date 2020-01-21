import React from 'react'
import styled from 'styled-components'
import Section from 'js/components/Section'
import Link, { InternalLink } from 'js/components/Link'
import VCard from 'js/components/VCard'
import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGlobeEurope,
  FaInstagram,
  FaTwitter,
  FaPaperclip,
} from 'react-icons/fa'
import { AppContainer } from 'js/containers/AppContainer'
import { HeaderContainer, Header, Subheader } from 'js/containers/Header'

import iconLight from 'assets/icon.png'
import iconDark from 'assets/icon.png'

export default () => {
  return (
    <AppContainer>
      <HeaderContainer>
        <img src={iconLight} height="128" width="128" />
        <Header>Sunny Golovine</Header>
        <Subheader>
          Software Engineer specializing in Mobile Applications and React Native
        </Subheader>
      </HeaderContainer>
      <Section title="About">
        <Bio>
          My name is Arseniy Avery (I go by Sunny Golovine). I am a Web and
          Mobile developer specializing in React Native. I have worked for
          several companies in the past including OnQ and Cox Automotive where I
          helped build exceptional mobile applications.
        </Bio>
      </Section>
      <Section title="Contact">
        <VCard />
        <Link
          name="Email"
          detail="sunny@golovinemail.org"
          href="mailto:sunny@golovinemail.org"
          icon={<FaEnvelope />}
        />
        <Link
          icon={<FaPhone />}
          name="Phone"
          detail="(678) 646 2358"
          href="tel:1-678-646-2358"
        />
      </Section>
      <Section title="Links">
        {/* <InternalLink href="/resume" name="Resume" icon={<FaPaperclip />} /> */}
        <Link
          icon={<FaLinkedin />}
          name="Linkedin"
          href="https://linkedin.com/in/SunnyGolovine"
          detail="SunnyGolovine"
        />
        <Link
          icon={<FaGlobeEurope />}
          name="Website"
          href="https://glvn.co"
          detail="glvn.co"
        />
        <Link
          icon={<FaGithub />}
          name="Github"
          href="https://github.com/sgolovine"
          detail="sgolovine"
        />
        <Link
          icon={<FaInstagram />}
          name="Instagram"
          href="https://instagram.com/glvn.tsx"
          detail="glvn.tsx"
        />
        <Link
          icon={<FaTwitter />}
          name="Twitter"
          href="https://twitter.com/_glvn"
          detail="@_glvn"
        />
      </Section>
    </AppContainer>
  )
}

const Bio = styled.p`
  font-size: 18px;
  margin-bottom: 0.25em;
`
