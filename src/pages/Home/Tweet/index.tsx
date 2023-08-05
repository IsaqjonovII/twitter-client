import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../../components/Title";
import StyledTweet from "./style";
import Wrapper from "../../../components/Wrapper";
import { tweets } from "../../../mocks";
import { ITweet } from "../../../interfaces";
import { Avatar } from "@chakra-ui/react";
import { AiOutlineHeart, commentIcon } from "../../../assets";

type paramsID = {
  id?: string;
};
const TWeetInfo = () => {
  const { id } = useParams<paramsID>();
  const navigate = useNavigate();
  const [currentTweet, setCurrentTweet] = useState<ITweet | null>(null);
  useEffect(() => {
    const filteredTweet = tweets.filter((tweet) => tweet.id == id);
    setCurrentTweet(filteredTweet[0]);
  }, [id]);

  console.log(currentTweet);

  return (
    <StyledTweet>
      <PageTitle>
        <span onClick={() => navigate("/")}>{"<-"}</span> Tweet
      </PageTitle>
      <Wrapper className="replies__wrp">
        <Wrapper flex="flex" className="current__tweet">
          {" "}
          <Avatar
            name="Dan Abrahmov"
            size="md"
            src="https://bit.ly/dan-abramov"
          />{" "}
          <Wrapper flex="grid">
            <p>Dan Abrahmov</p>
            <small>@dan_abrahmov</small>
          </Wrapper>
        </Wrapper>
        <Wrapper className="tweet__content">{currentTweet?.content}</Wrapper>
        <Wrapper className="tweet__date">
          15:23 PM {currentTweet?.publishedAt}
        </Wrapper>
        <Wrapper className="tweet__actions__wrp">
          {currentTweet?.likes.count}{" "}
          <span>
            like
            {currentTweet?.likes.count > 1 ? "s" : null}
          </span>
        </Wrapper>
        <Wrapper className="tweet__actions__wrp" flex="flex" justify="center">
          <Wrapper
            className="action__wrp"
            flex="flex"
            align="center"
            justify="center"
          >
            <img src={commentIcon} alt="" />
          </Wrapper>
          <Wrapper
            className="action__wrp"
            align="center"
            flex="flex"
            justify="center"
          >
            <AiOutlineHeart className="heart__icon" />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </StyledTweet>
  );
};

export default TWeetInfo;
