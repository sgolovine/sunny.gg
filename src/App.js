import { html } from "htm/preact";
import { css } from "emotion";
import { Link } from "./Components";

const helloStyle = css`
  font-size: 36px;
  color: red;
`;

export const App = () => html`
  <div>
    <p className=${helloStyle}>Hello World</p>
    <${Link} to="http://www.google.com" name="Google" />
  </div>
`;
