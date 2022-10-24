import React from "react";
import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Logo } from "./homeComponents/Logo";
const Footer = (props) => {
  return (
    <Box as="footer" role="contentinfo" bg="blackAlpha.700" {...props}>
      <Container
        maxW="container.xl"
        as="footer"
        role="contentinfo"
        py={{ base: "12", md: "12" }}
      >
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="space-between" direction="row" align="center">
            <Logo />
            <ButtonGroup variant="white">
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" color="white" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" color="white" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" color="white" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="white">
            &copy; {new Date().getFullYear()} DiDan Store, Inc. All rights
            reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
