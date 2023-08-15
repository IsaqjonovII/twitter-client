import Wrapper from "../../components/Wrapper";
import { Avatar, Textarea } from "@chakra-ui/react";
import StyledHome from "./style";
import { tweets } from "../../mocks";
import { Link } from "react-router-dom";
import { AiOutlineHeart, commentIcon } from "../../assets";
import PageTitle from "../../components/Title";

const Home = () => {

  return (
    <StyledHome>
      <PageTitle>Home</PageTitle>
      <Wrapper className="tweet__wrp">
        <Wrapper className="tweet__inp">
          <Textarea
            placeholder="Nimo'lyapti bro"
            variant="unstyled"
            resize="none"
          />
        </Wrapper>

        <button className="tweet__btn">Tweet</button>
      </Wrapper>
      <Wrapper className="tweets__wrp" direction="column">
        {tweets.map(({ id, content, likes: { count } }) => (
          <Wrapper className="feed__tweet__wrp" key={id}>
            <Link to={"/status/" + id}>
              <Wrapper flex="flex" align="center">
                <Avatar
                  name="Dan Abrahmov"
                  size="md"
                  src="https://bit.ly/dan-abramov"
                />
                <Wrapper className="tweet__content">{content}</Wrapper>
              </Wrapper>
            </Link>
            <Wrapper
              className="tweet__actions__wrp"
              flex="flex"
              justify="space-between"
            >
              <Wrapper
                className="action__wrp"
                flex="flex"
                align="center"
                justify="center"
              >
                <img src={commentIcon} alt="" />
                <span>2</span>
              </Wrapper>
              <Wrapper
                className="action__wrp"
                align="center"
                flex="flex"
                justify="center"
              >
                <AiOutlineHeart
                  className="heart__icon"
                  onClick={() => (count += 1)}
                />
                <span>{count}</span>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        ))}
      </Wrapper>
    </StyledHome>
  );
};

export default Home;
