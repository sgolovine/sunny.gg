import { html } from "htm/preact";
import { css } from "emotion";

const helloStyle = css`
  font-size: 36px;
  color: red;
`;

export const App = () => html`
  <div>
    <p className=${helloStyle}>Hello World</p>
  </div>
`;
