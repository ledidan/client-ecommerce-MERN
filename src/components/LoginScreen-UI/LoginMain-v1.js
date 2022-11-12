import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import { Link } from "react-router-dom";
import { login, loginOAuth2 } from "../../redux/actions/UserAction";
import Message from "../../components/LoadingError/Error";
import Loading from "../../components/LoadingError/Loading";
const LoginMain = ({ location, history }) => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  // eslint-disable-next-line

  const toast = useToast();
  // Executing side-effect in process of user login
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);

      toast({
        title: `Xác minh tài khoản thành công!`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
    // eslint-disable-next-line
  }, [userInfo, redirect, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Todo
    dispatch(login(email, password));
  };

  return (
    <Container
      maxW="lg"
      py={{
        base: "12",
        md: "20",
      }}
      px={{
        base: "0",
        sm: "8",
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Center>
            <Image src="/images/nikeLogo.png" w={70} h={70} />
          </Center>
          <Stack
            spacing={{
              base: "2",
              md: "3",
            }}
            textAlign="center"
          >
            <Heading
              size={useBreakpointValue({
                base: "xs",
                md: "xl",
              })}
              fontWeight="800"
            >
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text fontSize="14px" color="muted">
                Don't have an account?
              </Text>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{
            base: "0",
            sm: "8",
          }}
          px={{
            base: "4",
            sm: "10",
          }}
          bg={useBreakpointValue({
            base: "transparent",
            sm: "bg-surface",
          })}
          boxShadow={{
            base: "none",
            sm: useColorModeValue("lg", "xl-dark"),
          }}
          borderRadius={{
            base: "none",
            sm: "xl",
          }}
        >
          {error && <Message variant={"alert-danger"}>{error}</Message>}
          {loading && <Loading></Loading>}
          <form spacing="6" onSubmit={submitHandler}>
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Địa chỉ email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <PasswordField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
              />
            </Stack>
            <HStack justify="space-between" mt={4}>
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6" mt={5}>
              <Button colorScheme="red" type="submit">
                Sign in
              </Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginMain;
