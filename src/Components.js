import { html } from "htm/preact";
import { css } from "emotion";

// Link
const linkStyle = css`
  display: block;
  border: 1.5px solid;
  margin: 0.5em;
  padding: 0.7em;
  text-decoration: none;
  font-size: 18px;
  color: #3490de;
  display: flex;
  justify-content: space-between;
  font-family: Roboto, sans-serif;
`;

const linkText = css`
  margin-left: 5px;
  font-family: Roboto;
`;

const left = css`
  display: flex;
  flex-direction: row;
`;

// Section
const sectionContainer = css`
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
  max-width: 400px;
`;

const sectionHeader = css`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #393e46;
  font-family: Roboto;
`;

const sectionDivider = css`
  color: #393e46;
`;

export const Link = ({ name, detail, href }) => {
  return html`
    <a className=${linkStyle} href=${href} target="_blank">
      <div className=${left}>
        <p className=${linkText}>${name}</p>
      </div>
      <p className=${linkText}>${detail}</p>
    </a>
  `;
};

export const Section = ({ title, children }) => {
  return html`
    <div className=${sectionContainer}>
      <h1 className=${sectionHeader}>
        ${title}
      </h1>
      <hr className=${sectionDivider} />
      <div>
        ${children}
      </div>
    </div>
  `;
};

export const VCard = () => {
  return html``;
};
