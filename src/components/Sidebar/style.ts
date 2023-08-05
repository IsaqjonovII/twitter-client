import styled from "styled-components";
import { colors } from "../../constants";

const { blue, gray1 } = colors;
export default styled.div`
  display: flex;
  .sidebar {
    width: 100%;
    max-width: 17.1rem;
    height: 100vh;
    position: sticky;
    top: 0;
    z-index: 99;
    border-right: 0.0625rem solid ${gray1};
  }
  .sidebar__header {
    padding: 0.7rem;
    color: ${blue};
  }
`;
