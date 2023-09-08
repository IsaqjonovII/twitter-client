import { useState, useEffect } from "react";
import { Spinner, Textarea, useToast } from "@chakra-ui/react";
import {
  useGetAllTweetsQuery,
  usePostTweetMutation,
} from "../../service/tweets";
import StyledHome from "./style";
import { reload } from "../../utils";
import { RxReload } from "../../assets";
import { ITweet } from "../../interfaces";
import { useAppSelector } from "../../hooks";
import Wrapper from "../../components/Wrapper";
import PageTitle from "../../components/Title";
import TweetWrp from "../../components/Wrapper/Tweet";

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

  console.log(tweetsData);
  
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
        {isTweetsLoading ? (
          <Spinner
            display="block"
            margin="auto"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : null}
        {!tweets?.length && (
          <div className="nodata">
            <div className="nodata__label">Hech qanday tweet topilmadi</div>
            <div className="nodata__label">
              {" "}
              Balkim saytni qayta yuklab ko'rarsiz{" "}
            </div>
            <button className="reload__btn" onClick={reload}>
              <RxReload />
            </button>
          </div>
        )}
        {tweets?.map((tweetData) => (
          <TweetWrp {...tweetData} key={tweetData._id} />
        ))}
      </Wrapper>
    </StyledHome>
  );
};

export default Home;
