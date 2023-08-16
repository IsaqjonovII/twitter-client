import styled from "styled-components";
import { colors } from "../../../constants";

const {gray, gray1, blue, blue1} = colors;

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
`