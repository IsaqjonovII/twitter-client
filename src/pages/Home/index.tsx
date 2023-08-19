import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Textarea } from "@chakra-ui/react";
import StyledHome from "./style";
import { tweets } from "../../mocks";
import Wrapper from "../../components/Wrapper";
import PageTitle from "../../components/Title";
import { AiOutlineHeart, commentIcon } from "../../assets";
import {
  useGetAllTweetsQuery,
  usePostTweetMutation,
} from "../../service/tweets";
import { useAppSelector } from "../../hooks";

const Home = () => {
  const [tweetContent, setTweetContent] = useState<string>("");
  const user = useAppSelector((state) => state.auth.user);
  const [postTweet, { data, isLoading, error }] = usePostTweetMutation();
  const {
    data: allTweets,
    isLoading: isAllTweetsLoading,
    error: allTweetsError,
  } = useGetAllTweetsQuery();

  useEffect(() => {
    if (allTweets?.length && !isAllTweetsLoading) {
      console.log(allTweets);
    }
  }, [allTweets, isAllTweetsLoading]);
  const handleTweet = (e: any) => {
    e.preventDefault();
    const tweetData = {
      tweetedUser: user,
      content: tweetContent,
    };
    postTweet(tweetData);
    setTweetContent("");
  };

  useEffect(() => {
    if (data && !isLoading) {
      console.log(data);
    }
  }, [data, isLoading]);

  useEffect(() => {
    console.log(error);
    console.log(allTweetsError);
  }, [error, allTweetsError]);

  return (
    <StyledHome>
      <PageTitle>Home</PageTitle>
      <Wrapper className="tweet__wrp">
        <form onSubmit={handleTweet}>
          <Wrapper className="tweet__inp">
            <Textarea
              value={tweetContent}
              onChange={({ target }) => setTweetContent(target.value)}
              placeholder="Nimo'lyapti bro"
              variant="unstyled"
              resize="none"
            />
          </Wrapper>

          <button
            className="tweet__btn"
            type="submit"
            disabled={!tweetContent.length}
          >
            Tweet
          </button>
        </form>
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
