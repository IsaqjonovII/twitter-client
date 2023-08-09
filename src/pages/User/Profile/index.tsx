import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../../components/Title";
import { useGetUserInfoQuery } from "../../../service";
import { signout } from "../../../store/reducer/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.token);
  const { data, isLoading, error } = useGetUserInfoQuery(token);

  console.log(data);

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
