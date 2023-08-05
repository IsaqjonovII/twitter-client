import { createGlobalStyle } from "styled-components";
import { colors } from "../constants";
const { blue1, white } = colors;
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Overpass', sans-serif;
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
  .app__container {
    width: 100%;
    max-width: calc(17.1rem + 37.3rem + 21.85rem + 2rem);
    margin: auto;
    height: 100vh;
    color: ${white};
    position: relative;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
