import { useAppDispatch } from "../../../hooks";
import PageTitle from "../../../components/Title";
import { signout } from "../../../store/reducer/AuthSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    dispatch(signout());
    navigate("/")
  };
  return (
    <div>
      <PageTitle>Profile</PageTitle>

      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default Profile;
