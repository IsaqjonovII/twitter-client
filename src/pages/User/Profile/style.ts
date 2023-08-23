import styled from "styled-components";
import { colors } from "../../../constants";

const { gray, gray1, blue, red, white } = colors;

export default styled.div`
  .user__tweets__indicator {
    font-size: 0.8125rem;
    color: ${gray};
    font-weight: 200;
  }
  .back__icon {
    font-size: 1.5rem;
    color: ${blue};
    margin-right: 1.4rem;
  }
  .profile__header {
    display: flex;
    align-items: center;
  }
  .user__name {
    flex: 1;
  }
  .popover__arrow,
  .popover__content {
    background: ${gray1} !important;
  }
  .signout__btn {
    font-size: 1rem;
    border: 0.08rem solid transparent;
    color: ${red};
    padding: 0.3rem 0.4rem;
    border-radius: 1rem;
    transition: 200ms ease-in-out;
    &:hover {
      border: 0.08rem solid ${red};
    }
  }
  .profile__content {
    padding: 1rem;
    .profile__avatar,
    .profile__bio,
    .profile__username {
      margin-bottom: 1rem;
    }
    .profile__location {
      color: ${gray};
      cursor: pointer;
      svg {
        font-size: 1.4rem;
        margin-right: .5rem;
      }
    }
  }
  .profile__name {
    font-size: 1.42rem;
    line-height: 1;
  }
  .profile__username {
    color: ${gray};
  }
  .edit__btn {
    padding: 0.4rem 0.9rem;
    border: 0.08rem solid ${blue};
    color: ${blue};
    border-radius: 1.5rem;
    transition: 200ms ease-in-out;
    &:hover {
      background: ${blue};
      color: ${white};
    }
  }
`;
