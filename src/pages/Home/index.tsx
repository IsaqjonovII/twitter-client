import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Spinner, Textarea, useToast } from "@chakra-ui/react";
import StyledHome from "./style";
import { useAppSelector } from "../../hooks";
import Wrapper from "../../components/Wrapper";
import PageTitle from "../../components/Title";
import { AiOutlineHeart, commentIcon } from "../../assets";
import {
  useGetAllTweetsQuery,
  usePostTweetMutation,
} from "../../service/tweets";
import { ITweet } from "interfaces";

const Home = () => {
  const toast = useToast();
  const [tweetContent, setTweetContent] = useState<string>("");
  const [tweets, setTWeets] = useState<ITweet[] | null>([]);
  const user = useAppSelector((state) => state.auth.user);
  const [postTweet, { data, isLoading, error }] = usePostTweetMutation();

  const {
    data: tweetsData,
    isLoading: isTweetsLoading,
    error: tweetsError,
    refetch,
  } = useGetAllTweetsQuery();

  useEffect(() => {
    if (tweetsData && !isTweetsLoading) {
      setTWeets(tweetsData.tweets);
    }
  }, [tweetsData, isTweetsLoading]);
  const handleTweet = async (e: any) => {
    e.preventDefault();
    const tweetData = {
      tweetedUser: user?._id,
      content: tweetContent,
    };
    postTweet(tweetData);
    setTweetContent("");
    refetch();
  };

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data && !isLoading) {
      toast({
        title: data.message,
        status: "success",
        position: "top-right",
        duration: 800,
      });
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (error || tweetsError) {
      console.log(error);
      console.log(tweetsError);
    }
  }, [error, tweetsError]);

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
        {tweets?.length ? null : (
          <Spinner
            display="block"
            margin="auto"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        {tweets?.map(
          ({ _id, content, likes: { count }, comments: { commentsCount } }) => (
            <Wrapper className="feed__tweet__wrp" key={_id}>
              <Link to={"/status/" + _id}>
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
                  <span>{commentsCount ?? null}</span>
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
          )
        )}
      </Wrapper>
    </StyledHome>
  );
};

export default Home;
