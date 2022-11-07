import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <Container as="footer" role="contentinfo" maxW="container.xxl" bg="#4e5356">
    <Stack
      spacing="8"
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-around"
      py={{
        base: "12",
        md: "16",
      }}
    >
      <Stack
        spacing={{
          base: "6",
          md: "8",
        }}
        align="start"
      >
        <Image
          w={180}
          h={50}
          src="https://res.cloudinary.com/dfaejacdn/image/upload/v1667615733/Dan-Logo/logoLight-Didan_zam0dg.png"
        />
        <Text color="white">
          Tôi luôn muốn tạo ra những sản phẩm khác biệt và sáng tạo nhất.
        </Text>
      </Stack>
      <Stack
        direction={{
          base: "column-reverse",
          md: "column",
          lg: "row",
        }}
        spacing={{
          base: "12",
          md: "8",
        }}
      >
        <Stack direction="row" spacing="8">
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="md" fontWeight="semibold" color="white">
              Sản phẩm
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Link href="/about-us" color="whiteAlpha.700">
                Giới thiệu
              </Link>
              <Link href="/shop" color="whiteAlpha.700">
                Cửa hàng
              </Link>
              <Link href="/feedback" color="whiteAlpha.700">
                Feedback
              </Link>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="md" fontWeight="semibold" color="white">
              Chính sách
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Link href="/privacy" color="whiteAlpha.700">
                Chính sách & Quy định
              </Link>
              <Link href="/license" color="whiteAlpha.700">
                Bản quyền
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing="4">
          <Text fontSize="sm" fontWeight="semibold" color="white">
            Liên hệ với tôi
          </Text>
          <Stack
            spacing="4"
            direction={{
              base: "column",
              sm: "row",
            }}
            maxW={{
              lg: "360px",
            }}
          >
            <Input placeholder="Enter your email" type="email" required />
            <Button
              className="btn btn-outline-light"
              color="black"
              type="submit"
              flexShrink={0}
            >
              Gửi
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider />
    <Stack
      pt="8"
      pb="12"
      justify="center"
      direction={{
        base: "column-reverse",
        md: "row",
      }}
      align="center"
    >
      <Text fontSize="sm" color="white">
        &copy; {new Date().getFullYear()} Blackdouble.D, Inc. All rights
        reserved.
      </Text>
      <ButtonGroup variant="link">
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/ledidan/"
          aria-label="LinkedIn"
          color="whiteAlpha.800"
          icon={<FaLinkedin fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          href="https://www.github.com/ledidan"
          aria-label="GitHub"
          color="whiteAlpha.800"
          icon={<FaGithub fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          href="https://www.facebook.com/ledidan"
          aria-label="Facebook"
          color="whiteAlpha.800"
          icon={<FaFacebook fontSize="1.25rem" />}
        />
      </ButtonGroup>
    </Stack>
  </Container>
);

export default Footer;
