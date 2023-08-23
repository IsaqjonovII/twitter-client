import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import PageTitle from "../../../components/Title";
import StyledTweet from "./style";
import { useGetSingleTweetQuery } from "../../../service/tweets";
// import Wrapper from "../../../components/Wrapper";
// import { ITweet } from "../../../interfaces";
// import { Avatar, Textarea } from "@chakra-ui/react";
// import { AiOutlineHeart, commentIcon } from "../../../assets";

type paramsID = {
  id?: string;
};
const TWeetInfo = () => {
  const { id } = useParams<paramsID>();
  const { data, isLoading, error } = useGetSingleTweetQuery(id!);

  useEffect(() => {
    // if (data && !isLoading) {
    console.log(data);
    // }
  }, [data, isLoading]);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  // const navigate = useNavigate();
  // const [currentTweet, setCurrentTweet] = useState<ITweet | null>(null);

  return (
    <StyledTweet>
      <h1>hi</h1>
      {/* <PageTitle>
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
            {currentTweet?.likes && currentTweet?.likes.count > 1 ? "s" : null}
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
        <Wrapper className="reply__inp">
          <Textarea
            border="none"
            placeholder="Tweet your reply"
            resize="none"
          />
          <button className="tweet__btn" disabled={true}>
            Tweet
          </button>
        </Wrapper>
        <Wrapper className="replies">
          {currentTweet?.comments.commentsData.map(
            ({ commentId, commentContent, commentLikes }) => (
              <Wrapper key={commentId} flex="flex" className="reply__wrp">
                <Wrapper className="reply">{commentContent}</Wrapper>
                <Wrapper
                  flex="flex"
                  className="reply__likes"
                  justify="center"
                  align="center"
                >
                  <AiOutlineHeart className="heart__icon" />
                  <p className="like__count">{commentLikes}</p>
                </Wrapper>
              </Wrapper>
            )
          )}
        </Wrapper>
      </Wrapper> */}
    </StyledTweet>
  );
};

export default TWeetInfo;
