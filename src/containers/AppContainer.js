import { css } from "emotion";
import { html } from "htm/preact";

const appContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AppContainer = ({ children }) => html`
  <div className=${appContainer}>
    ${children}
  </div>
`;
