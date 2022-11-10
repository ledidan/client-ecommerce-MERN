import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
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
    <Container mt={100}>
      <Flex justify="center" align="center">
        {headingInfo.map((item) => (
          <SimpleGrid key={item.id} maxW={["row", "column"]}>
            <VStack
              gap="10px"
              bg="gray.50"
              borderRadius={10}
              marginRight={5}
              p={5}
            >
              <Center className="info-image">{item.icon}</Center>
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
            </VStack>
          </SimpleGrid>
        ))}
      </Flex>
    </Container>
  );
}
