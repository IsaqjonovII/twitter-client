import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
import {CiLogin} from "react-icons/ci"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import StyledAuth from "./style";

const Register = () => {
  const [isShowedPassword, setIsShowedPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isBtnDisabled = [username, password].every(Boolean);

  console.log(isBtnDisabled);

  const handleLogin = () => {
    console.log(username + ":" + password);
  };

  return (
    <StyledAuth>
      <FormControl className="register__form" onSubmit={handleLogin}>
        <h1 className="form__title">Login</h1>
        <FormLabel className="form__label">Username</FormLabel>
        <InputGroup>
          <InputLeftAddon
            children="@"
            style={{ background: "transparent", border: "1px solid #283340" }}
            color="#8899A6"
          />
          <Input
            type="text"
            className="form__input"
            required
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            placeholder="Enter your username"
          />
        </InputGroup>
        <FormLabel className="form__label">Password</FormLabel>
        <InputGroup>
          <Input
            type={isShowedPassword ? "text" : "password"}
            className="form__input"
            required
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Enter your password"
          />
          <InputRightElement paddingRight="1">
            <Button
              onClick={() => setIsShowedPassword(!isShowedPassword)}
              size="sm"
              colorScheme="twitter"
            >
              {isShowedPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button
          colorScheme="twitter"
          className="submit__btn"
          disabled={!isBtnDisabled}
          rightIcon={<CiLogin />}
        >
          Login
        </Button>
      </FormControl>
    </StyledAuth>
  );
};

export default Register;
