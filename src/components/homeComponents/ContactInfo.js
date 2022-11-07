import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlEnvolopeLetter } from "react-icons/sl";
import { TfiPackage } from "react-icons/tfi";
export default function ContactInfo() {
  const headingInfo = [
    {
      id: 1,
      heading: "Miễn phí ship trên $100",
      description:
        "Free shipping to all over the world with many specials only for our dear customers",
      icon: <CiDeliveryTruck size={80} />,
    },
    {
      id: 2,
      heading: "-10% đăng ký nhận thông tin email",
      description:
        "Many customers entrust varius shoes needs to us, and customer satisfaction is our pride",
      icon: <SlEnvolopeLetter size={50} />,
    },
    {
      id: 3,
      heading: "Đổi trả miễn phí tại cửa hàng",
      description:
        "You can get various shoes with the highest quality an affoddable price",
      icon: <TfiPackage size={50} />,
    },
  ];

  return (
    <Container className="contactInfo container" mt={100}>
      <Stack>
        <Box className="col-lg-12 col-md-12 col-sm-12 contact-Box">
          {headingInfo.map((item) => (
            <Stack key={item.id}>
              <Wrap spacing="30px">
                <WrapItem>
                  <Center
                    w={{ base: "350px", md: "280px", lg: "450px" }}
                    h={{ base: "320px", md: "350px", lg: "400px" }}
                    bg="gray.50"
                    borderRadius={10}
                  >
                    <Center
                      className="box-info"
                      alignItems="center"
                      gap="20px"
                      w={{ base: "300px", md: "400px", lg: "500px" }}
                    >
                      <HStack className="info-image">{item.icon}</HStack>
                      <Heading
                        as="h3"
                        size="md"
                        w={[200, 300, 400]}
                        textTransform="uppercase"
                        textAlign="center"
                        fontWeight="bold"
                      >
                        {item.heading}
                      </Heading>
                      <Text size="sm" textAlign="center">
                        {item.description}
                      </Text>
                    </Center>
                  </Center>
                </WrapItem>
              </Wrap>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
