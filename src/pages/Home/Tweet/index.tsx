import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../../components/Title";
import StyledTweet from "./style";
import Wrapper from "../../../components/Wrapper";
import { tweets } from "../../../mocks";
import { ITweet } from "../../../interfaces";
import { Avatar } from "@chakra-ui/react";

type paramsID = {
  id?: string | number;
};
const TWeetInfo = () => {
  const params: paramsID = useParams();
  const navigate = useNavigate();
  const [currentTweet, setCurrentTweet] = useState<ITweet | null>(null);
  useEffect(() => {
    const filteredTweet = tweets.filter((tweet) => tweet.id == params.id);
    setCurrentTweet(filteredTweet[0]);
  }, [params.id]);

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
        <Wrapper className="tweet__content">
          {currentTweet?.content}
        </Wrapper>
        <Wrapper className="tweet__date">
          15:23 PM {`   `}{currentTweet?.publishedAt}
        </Wrapper>
      </Wrapper>
    </StyledTweet>
  );
};

export default TWeetInfo;
