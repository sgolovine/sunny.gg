import { html } from "htm/preact";
import { css } from "emotion";

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
