import { css } from "emotion";
import { html } from "htm/preact";

const bioStyle = css`
  font-size: 18px;
  margin-bottom: 0.25em;
  font-family: Roboto, sans-serif;
`;

export const Bio = ({ children }) => html`
  <div className=${bioStyle}>
    ${children}
  </div>
`;
