import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import StyledAuth from "./style";
import { Link } from "react-router-dom";

const Register = () => {
  const [isShowedPassword, setIsShowedPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const isBtnDisabled = [username, password, name, email].every(Boolean);

  console.log(isBtnDisabled);

  const handleLogin = () => {
    console.log(username + ":" + password);
  };

  return (
    <StyledAuth>
      <FormControl className="register__form" onSubmit={handleLogin} isRequired>
        <h1 className="form__title">Ro'yhatdan o'tish</h1>
        <FormLabel className="form__label">Ismingiz</FormLabel>
        <Input
          type="text"
          className="form__input"
          required
          id="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Ismingizni kiriting"
        />
        <FormLabel className="form__label">Email</FormLabel>
        <Input
          type="email"
          className="form__input"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          id="email"
          placeholder="Elektron pochta manzilni kiriting"
        />
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
            placeholder="Usernameni kiriting"
          />
        </InputGroup>
        <FormLabel className="form__label">Paroli</FormLabel>
        <InputGroup>
          <Input
            type={isShowedPassword ? "text" : "password"}
            className="form__input"
            required
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Parolingizni kiriting"
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
          type="submit"
          colorScheme="twitter"
          className="submit__btn"
          disabled={!isBtnDisabled}
        >
          Hisob yarating
        </Button>

        <p className="route__link">
          Hisobingiz bormi? <Link to="/">Tizimga kirish</Link>
        </p>
      </FormControl>
    </StyledAuth>
  );
};

export default Register;
