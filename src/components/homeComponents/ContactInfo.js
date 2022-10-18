import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
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
      heading: `Free Delivery From $100`,
      icon: <CiDeliveryTruck size={40} />,
    },
    {
      heading: `-10% for newsletter subcription`,
      icon: <SlEnvolopeLetter size={40} />,
    },
    {
      heading: `Free return in showroom`,
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
                    w={{ base: "350px", md: "280px", lg: "380px" }}
                    h={{ base: "200px", md: "350px", lg: "350px" }}
                  >
                    <Box
                      className="box-info"
                      gap="20px"
                      maxW={{ base: "300px", md: "400px", lg: "500px" }}
                    >
                      <HStack className="info-image">{item.icon}</HStack>
                      <Heading
                        as="h3"
                        size="md"
                        textTransform="uppercase"
                        textAlign="center"
                      >
                        {item.heading}
                      </Heading>
                    </Box>
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
