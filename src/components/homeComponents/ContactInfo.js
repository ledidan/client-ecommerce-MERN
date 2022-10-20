import {
  Box,
  Center,
  Container,
  Flex,
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
  const headingIconInfo = [
    {
      heading: "Free Delivery From $100",
      description:
        "Free shipping to all over the world with many specials only for our dear customers",
      icon: <CiDeliveryTruck size={40} />,
    },
    {
      heading: "-10% for newsletter subcription",
      description:
        "Many customers entrust varius shoes needs to us, and customer satisfaction is our pride",
      icon: <SlEnvolopeLetter size={40} />,
    },
    {
      heading: "Free return in showroom",
      description:
        "You can get various shoes with the highest quality an affoddable price",
      icon: <TfiPackage size={40} />,
    },
  ];

  return (
    <Container className="contactInfo container" mt={50}>
      <Stack>
        <Box className="col-lg-12 col-md-12 col-sm-12 contact-Box">
          {headingIconInfo.map((item) => (
            <>
              <Wrap spacing="30px">
                <WrapItem>
                  <Center
                    w={{ base: "350px", md: "280px", lg: "450px" }}
                    h={{ base: "300px", md: "400px", lg: "450px" }}
                  >
                    <Center
                      className="box-info"
                      alignItems="center"
                      gap="20px"
                      W={{ base: "300px", md: "400px", lg: "500px" }}
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
            </>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
