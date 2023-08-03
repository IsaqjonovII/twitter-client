import styled from "styled-components";
import { colors } from "../../constants";

const { blue, blue1, red, white } = colors;

export default styled.div`
  width: 100%;
  max-width: calc(17.1rem + 37.3rem + 21.85rem + 2rem);
  margin: auto;
  height: 100vh;
  color: ${white};
  display: flex;
`;
