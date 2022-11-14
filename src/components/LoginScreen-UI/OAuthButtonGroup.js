import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { USER_LOGIN_SUCCESS } from "../../redux/constants/UserContants";
import { GitHubIcon, GoogleIcon, FacebookIcon } from "./ProviderIcons";

export const OAuthButtonGroup = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const url = "http://localhost:4000/auth/login/success";
      const { data } = await axios.get(url, { withCredentials: true });
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data.user,
      });
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      setUser(data.user);
    } catch (err) {
      console.log(err);
    }
  };
  const providers = [
    {
      name: "Google",
      icon: <GoogleIcon boxSize="5" />,
      googleAuth: async () => {
        if (window.open(`http://localhost:4000/auth/google`, "_self"))
          return getUser();
      },
    },
    {
      name: "Facebook",
      icon: <FacebookIcon boxSize="5" />,
    },
    {
      name: "GitHub",
      icon: <GitHubIcon boxSize="5" />,
    },
  ];
  useEffect(() => {}, []);
  console.log(user);

  return (
    <ButtonGroup variant="outline" spacing="4" width="full">
      {providers.map(({ name, icon, googleAuth }) => (
        <Button key={name} width="full" onClick={googleAuth}>
          <VisuallyHidden>Sign in with {name}</VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  );
};
