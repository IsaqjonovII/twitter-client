import { createGlobalStyle } from "styled-components";
import { colors } from "../constants";
const { blue1 } = colors;
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: san-serif;
  }
  body {
    background-color: ${blue1} !important;
  }
  a {
    text-decoration: none;
  }
  ul,
  li {
    list-style-type: none;
  }
`;
