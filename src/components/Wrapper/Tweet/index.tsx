import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import { AiOutlineHeart, commentIcon } from "../../../assets";
import Wrapper from "../../../components/Wrapper";
import { ITweet } from "../../../interfaces";

const TweetWrp = ({
  _id,
  content,
  likes: { count },
  comments: { commentsCount },
}: ITweet) => {
  console.log(_id);

  return (
    <Wrapper className="feed__tweet__wrp">
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
  );
};

export default TweetWrp;
