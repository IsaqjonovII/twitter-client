import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import StyledProfile from "./style";
import { IUser } from "../../../interfaces";
import { useAppDispatch } from "../../../hooks";
import PageTitle from "../../../components/Title";
import { useGetUserInfoQuery } from "../../../service";
import { signout } from "../../../store/reducer/AuthSlice";

type TUsername = {
  username?: string | any;
};
const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { username }: TUsername = useParams();
  const [userData, setUserData] = useState<IUser | null>(null);
  const { data, error, isLoading } = useGetUserInfoQuery(username);

  useEffect(() => {
    if (data && !isLoading) {
      setUserData(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleSignOut = () => {
    dispatch(signout());
    navigate("/");
  };
  return (
    <StyledProfile>
      <PageTitle className="profile__header">
        <Link to="/" className="back__icon">
          {"<-"}
        </Link>{" "}
        <div className="user__name">
          {userData?.name} <br />
          <p className="user__tweets__indicator">9 tweets</p>
        </div>
      </PageTitle>

      <button onClick={handleSignOut}>Sign out</button>
    </StyledProfile>
  );
};

export default Profile;
