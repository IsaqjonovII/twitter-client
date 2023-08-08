import { Link } from "react-router-dom";
import StyledAuth from "./style";


const Login = () => {
  return (
    <StyledAuth>
      Login
      <Link to="/register">Register an account</Link>
    </StyledAuth>
  );
};

export default Login;
