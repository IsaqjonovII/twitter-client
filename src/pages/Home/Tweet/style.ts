import styled from "styled-components";
import { colors } from "../../../constants";

const { gray, gray1, blue, red } = colors;

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
  .tweet__content,
  .tweet__date,
  .tweet__actions__wrp,
  .reply__wrp,
  .reply__inp {
    border-bottom: 0.03rem solid ${gray1};
  }
  .tweet__content {
    font-size: 1.25rem;
    padding: 0.5rem 0;
    margin: 0 0 0.5rem 0;
  }
  .tweet__date {
    color: ${gray};
    padding: 0.5rem 0;
    font-size: 0 0 0.9rem 0;
  }
  .tweet__actions__wrp {
    margin: 0.3rem 0;
    padding: 0 0 0.3rem 0;
    justify-content: center;
    span {
      color: ${gray};
      font-size: 0.9rem;
    }
  }
  .action__wrp {
    font-size: 1.25rem;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 0.8rem;
    cursor: pointer;
    &:last-child:hover {
      background: ${red}20;
      border-radius: 50%;
    }
    &:first-child:hover {
      background: ${blue}20;
      border-radius: 50%;
    }
    img {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
  .heart__icon {
    color: ${gray};
  }
  .reply__wrp {
    padding: 0.5rem 0;
  }
  .like__count {
    font-size: 1rem;
    margin-left: 0.4rem;
  }
  .reply__likes {
    max-width: 4rem;
    cursor: pointer;
  }
  .tweet__btn {
    padding: 0.5rem 1rem;
    background: ${blue};
    margin: .5rem 0;
    border-radius: 1rem;
  }
`;
