import { css } from "emotion";
import { html } from "htm/preact";

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
