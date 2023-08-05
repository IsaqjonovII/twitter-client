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
    margin-bottom: 2rem;
  }
  .sidebar__link {
    font-size: 1.1875rem;
    height: 3.75rem;
    .icon {
      width: 1.7rem;
      height: 1.7rem;
    }
    span {
      height: 1.7rem;
      margin-left: 1.32rem;
    }
  }
  .routes__container {
    max-width: 40rem;
    border-right: 0.0625rem solid ${gray1};
  }
`;
