import { html } from "htm/preact";
import { Link } from "./Components";

import { AppContainer } from "./containers/AppContainer";
import { Header } from "./containers/Header";
import { Bio } from "./components/Bio";
import { Section } from "./components/Section";

import { header, subheader, bio } from "./content";

const Contact = () => html`
  <${Section} title="Contact">
    <${Link} name="Email" detail="sunny@glvn.co" href="mailto:sunny@glvn.co"/>
    <${Link} name="Phone" detail="(678) 646 2358" href="tel:1-678-646-2358"/>  
  </${Section}>
`;

const Links = () => html`
<${Section} title="Links">
  <${Link} name="Linkedin" detail="SunnyGolovine" href="https://linkedin.com/in/SunnyGolovine"/>
  <${Link} name="Website" detail="glvn.co" href="https://glvn.co"/>
  <${Link} name="Github" detail="sgolovine" href="https://github.com/sgolovine"/>
  <${Link} name="Instagram" detail="glvn.tsx" href="https://instagram.com/glvn.tsx"/>
  <${Link} name="Twitter" detail="@_glvn" href="https://twitter.com/_glvn"/>
</${Section}>
`;

export const App = () => html`
  <${AppContainer}>
    <${Header} headerText=${header} subheaderText=${subheader} />
    <${Section} title="About">
      <${Bio}>${bio}</${Bio}>
    </${Section}>
    <${Contact} />
    <${Links} />
  </${AppContainer}>
`;
