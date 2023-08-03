import styled from "styled-components";
import { colors } from "../../constants";

const { red, white, blue, blue1, gray1 } = colors;
export default styled.div`
  width: 100%;
  max-width: 17.1rem;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  border-right: 0.0625rem solid ${gray1};

  .sidebar__header {
    padding: 0.7rem;
    color: ${blue};
  }
`;
