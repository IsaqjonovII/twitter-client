import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../../components/Title";
import { useGetUserInfoQuery } from "../../../service";
import { signout } from "../../../store/reducer/AuthSlice";
import { useAppDispatch } from "../../../hooks";
type TUsername = {
  username?: string | any;
};
const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { username }: TUsername = useParams();
  const { data, error, isLoading } = useGetUserInfoQuery(username);

  useEffect(() => {
    if (data && !isLoading) {
      console.log(data);
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
    <div>
      <PageTitle>Profile</PageTitle>

      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default Profile;
