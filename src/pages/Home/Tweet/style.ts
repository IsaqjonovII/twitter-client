import styled from "styled-components";
import { colors } from "../../../constants";

const { gray, gray1 } = colors;

export default styled.div`
  span {
    cursor: pointer;
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
  .current__tweet {
    padding: 0.3rem 0 0.8rem 0;
  }
  .replies__wrp {
    padding: 1rem;
  }
  .tweet__content {
    font-size: 1.25rem;
    padding: 0.5rem 0;
    margin: 0 0 0.5rem 0;
    border-bottom: 0.03rem solid ${gray1};
  }
  .tweet__date {
    color: ${gray};
    font-size: 0.9rem;
  }
`;
