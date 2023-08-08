import styled from "styled-components";
import { colors } from "../../../constants";

const { gray, gray1, blue } = colors;

export default styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  .register__form, .login__form {
    max-width: 30rem;
    box-shadow: 0 0 0.0625rem ${gray};
    padding: 1rem;
    border-radius: 1rem;
    .form__label {
      margin: 1.5rem 0 0.5rem 0;
      &:first-child {
        margin: 0.5rem 0;
      }
    }
    .form__input {
      border: 0.06rem solid ${gray1};
    }
  }
  .form__title {
    font-size: 1.3rem;
  }
  .submit__btn {
    width: 100%;
    margin-top: 1.5rem;
  }
  .route__link {
    margin: 1rem 0 0 0;
    a {
      color: ${blue};
    }
  }
  .login__form {
    max-width: 25rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 1.5rem;
  }
`;
