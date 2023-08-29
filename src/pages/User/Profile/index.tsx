import { useEffect, useState } from "react";
import { Avatar } from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StyledProfile from "./style";
import { IUser } from "../../../interfaces";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import PageTitle from "../../../components/Title";
import Wrapper from "../../../components/Wrapper";
import { useGetUserInfoQuery } from "../../../service";
import { signout } from "../../../store/reducer/AuthSlice";
import { IoLocationOutline, IoCalendarOutline } from "../../../assets";

type TUsername = {
  username?: string | any;
};

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { username }: TUsername = useParams();
  const user = useAppSelector((state) => state.auth.user);
  const [userData, setUserData] = useState<IUser | null>(null);
  const { data, error, isLoading } = useGetUserInfoQuery(username);
  useEffect(() => {
    if (data && !isLoading) {
      setUserData(data?.data);
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleSignOut = () => {
    if (confirm("Are you sure to sign out?")) {
      dispatch(signout());
      navigate("/");
    }
  };
  console.log(userData);

  return (
    <StyledProfile>
      <PageTitle className="profile__header">
        <Link to="/home" className="back__icon">
          {"<-"}
        </Link>{" "}
        <div className="user__name">
          {userData?.name ?? user?.name} <br />
          <p className="user__tweets__indicator">9 tweets</p>
        </div>
        <button className="signout__btn" onClick={handleSignOut}>
          Sign out
        </button>
      </PageTitle>
      <Wrapper className="profile__content">
        <Wrapper
          className="profile__avatar"
          flex="flex"
          justify="space-between"
          align="flex-end"
        >
          <Avatar name={userData?.name ?? user?.name} size="xl" />
          <button className="edit__btn">Edit profile</button>
        </Wrapper>
        <Wrapper className="profile__name">
          {userData?.name ?? user?.name}
        </Wrapper>
        <Wrapper className="profile__username">
          @{userData?.username ?? user?.username}
        </Wrapper>
        <Wrapper className="profile__bio">Bio.txt</Wrapper>
        <Wrapper flex="flex">
          <Wrapper className="profile__location" flex="flex" align="center">
            {" "}
            <IoLocationOutline /> Location of user
          </Wrapper>
          <Wrapper flex="flex" align="center" className="profile__location">
            <IoCalendarOutline /> Joined at August 2022
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </StyledProfile>
  );
};

export default Profile;
