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
} from "@chakra-ui/react";
import * as React from "react";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";

const SignUp = () => (
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
            Sign up to login
          </Heading>
          <HStack spacing="1" justify="center">
            <Text fontSize="14px" color="muted">
              You have an account?
            </Text>
            <Button variant="link" colorScheme="blue">
              Login
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
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input id="username" type="text" />
            </FormControl>
            {/* <FormControl>
              <FormLabel htmlFor="phoneNumber">Phone number</FormLabel>
              <Input id="phoneNumber" type="number" />
            </FormControl> */}
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <Stack spacing="6">
            <Button colorScheme="red">Sign Up</Button>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            <OAuthButtonGroup />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
);

export default SignUp;
