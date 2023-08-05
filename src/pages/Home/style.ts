import styled from "styled-components";
import { colors } from "../../constants";

const { blue, gray1, white, gray, red } = colors;

export default styled.div`
  width: 100%;
  max-width: 40rem;
  height: auto;
  min-height: 100vh;
  color: ${white};
  border-right: 0.06rem solid ${gray1};

  .home__title {
    display: block;
    padding: 1rem 0.5rem;
    font-size: 1.1875rem;
    font-weight: 700;
    line-height: normal;
  }

  .tweet__wrp {
    width: 100%;
    height: auto;
    padding: 0.5rem;
    margin-bottom: 0.8rem;
    border-bottom: 0.06rem solid ${gray1};

    .tweet__inp {
      textarea {
        text-indent: 1rem;
        font-size: 1.1rem;
        ::placeholder {
          color: ${gray};
        }
      }
    }

    .tweet__btn {
      width: 100%;
      max-width: 5.6rem;
      height: 2.3rem;
      background: ${blue};
      border-radius: 1rem;
      margin-left: auto;
      display: block;
    }
  }

  .tweets__wrp {
    height: auto;

    .feed__tweet__wrp {
      padding: 0.5rem 1rem;
    border-bottom: 0.06rem solid ${gray1};

      .tweet__content {
        padding: 1rem;
      }

      .tweet__actions__wrp {
        max-width: 60%;
        margin: auto;
        .action__wrp {
          max-width: 5rem;
          cursor: pointer;
          span {
            font-size: .9rem;
            display: inline-block;
            margin-left: .625rem;
          }
          .heart__icon {
            color: ${red};
          }
        }
      }
    }
  }
`;
