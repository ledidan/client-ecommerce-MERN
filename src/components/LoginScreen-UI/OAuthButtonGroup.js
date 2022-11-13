import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { GitHubIcon, GoogleIcon, FacebookIcon } from "./ProviderIcons";
import URL from "../../URL";
import { useDispatch } from "react-redux";
import { loginOAuth2 } from "../../redux/actions/UserAction";
const providers = [
  {
    name: "Google",
    icon: <GoogleIcon boxSize="5" />,
    google: () => {
      window.open(`${URL}/auth/google`, "_self");
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

export const OAuthButtonGroup = () => {
  const dispatch = useDispatch();
  return (
    <ButtonGroup variant="outline" spacing="4" width="full">
      {providers.map(({ name, icon, google }) => (
        <Button key={name} width="full" onClick={google}>
          <VisuallyHidden>Sign in with {name}</VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  );
};
