import { css } from "emotion";
import { html } from "htm/preact";

const container = css`
  padding-top: 2.5em;
  padding-bottom: 1em;
  text-align: center;
`;

const header = css`
  font-size: 32px;
  font-family: Roboto;
  margin-bottom: 10px;
`;

const subheader = css`
  font-size: 20px;
  margin-left: 15%;
  margin-right: 15%;
  font-family: Roboto, sans-serif;
`;

export const Header = ({ headerText, subheaderText }) => html`
  <div className=${container}>
    <h1 className=${header}>${headerText}</h1>
    <h2 className=${subheader}>${subheaderText}</h2>
  </div>
`;
