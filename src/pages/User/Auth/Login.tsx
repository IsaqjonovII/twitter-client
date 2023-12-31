import { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import StyledAuth from "./style";
import { useSignInMutation } from "../../../service";
import { signin } from "../../../store/reducer/AuthSlice";
import { useAppDispatch } from "../../../hooks";
import { HOME } from "../../../constants";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signIn] = useSignInMutation();
  const [isShowedPassword, setIsShowedPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isBtnDisabled = [username, password].every(Boolean);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const userData = { username: username.toLowerCase().trim(), password };
    try {
      const response = await signIn(userData);
      if ("error" in response) {
        toast({
          title: "Foydalanuvchi topilmadi yoki parol noto'g'ri",
          status: "error",
          isClosable: true,
        });
      } else {
        toast({
          title: "Tizimga muvaffaqiyatli kirildi",
          status: "success",
          position: "top-right",
          isClosable: true,
          duration: 700,
        });
        dispatch(signin(response.data));
        navigate(HOME);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledAuth>
      <FormControl className="login__form" isRequired>
        <form onSubmit={handleLogin}>
          <h1 className="form__title">Tizimga kirish</h1>
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
              minLength={4}
              onChange={({ target }) => setUsername(target.value)}
              placeholder="Usernameni kiriting"
            />
          </InputGroup>
          <FormLabel className="form__label">Password</FormLabel>
          <InputGroup>
            <Input
              type={isShowedPassword ? "text" : "password"}
              className="form__input"
              required
              id="password"
              minLength={8}
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
            rightIcon={<CiLogin />}
          >
            Tizimga kirish
          </Button>
          <p className="route__link">
            Hisobingiz yo'qmi? <Link to="/register">Ro'yhatdan o'tish</Link>
          </p>
        </form>
      </FormControl>
    </StyledAuth>
  );
};
export default Login;
