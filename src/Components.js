import { html } from "htm/preact";
import { css } from "emotion";

const linkStyle = css`
  text-decoration: none;
`;

export const Link = ({ name, to }) => html`
  <a className=${linkStyle} href=${to}>${name}</a>
`;
