import React, { useState } from "react";
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
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import StyledAuth from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../../service";
import { useAppDispatch } from "../../../hooks";
import { signin } from "../../../store/reducer/AuthSlice";

const Register = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [signUp] = useSignUpMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [isShowedPassword, setIsShowedPassword] = useState(false);
  const isBtnDisabled = Object.values(formData).every(Boolean);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      const response = await signUp(formData);
      if ("data" in response) {
        toast({
          title: "Muvaffaqiyatli hisob yaratildi",
          status: "success",
          position: "top-right",
          isClosable: true,
        });
        dispatch(signin(response));
        navigate("/")
      } else if ("error" in response) {
        toast({
          title: response.error.data.error,
          status: "error",
          isClosable: true,
        });
      }
    } catch (error) {
      console.log("Error:", error?.error?.data);
    }
  };

  return (
    <StyledAuth>
      <FormControl className="register__form" isRequired>
        <form onSubmit={handleRegister}>
          <h1 className="form__title">Ro'yhatdan o'tish</h1>
          <FormLabel className="form__label">Ismingiz</FormLabel>
          <Input
            type="text"
            className="form__input"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ismingizni kiriting"
          />
          <FormLabel className="form__label">Email</FormLabel>
          <Input
            type="email"
            className="form__input"
            required
            value={formData.email}
            minLength={5}
            name="email"
            onChange={handleChange}
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
              minLength={5}
              maxLength={12}
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
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
              name="password"
              minLength={8}
              maxLength={1024}
              value={formData.password}
              onChange={handleChange}
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
        </form>
      </FormControl>
    </StyledAuth>
  );
};

export default Register;
