import React from "react";
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

// Declare styled components
const CategoryBtn = styled.button`
  padding: 10px 30px;
  border: 1px solid #333;
  text-align: center;
  color: black;
  border-radius: 10px;
  margin: 12px 0px !important;
  transition: all 0.1s ease-in-out;
  &:hover {
    scale: 0, 2;
    background-color: #333;
    color: white;
  }
`;

const GenderCategory = () => {
  const renderCategories = {
    image1: `/images/air-jordan1.png`,
    title1: `nam`,
    image2: `/images/nike.png`,
    title2: `nu`,
    image3: `/images/air1.png`,
    title3: `treem`,
  };

  return (
    <Container maxW="max-content" mb={40}>
      <Center h={150}>
        <Heading as="h3" size="2xl">
          Danh Mục Giày
        </Heading>
      </Center>
      <Stack>
        <Grid
          templateColumns="repeat(2,1fr)"
          templateRows="repeat(2,1fr)"
          gap={4}
        >
          <GridItem colSpan={1}>
            <Box
              maxW="md"
              borderWidth="1px"
              borderRadius="xl"
              className="BoxItem"
            >
              <VStack>
                <Center>
                  <Image src={renderCategories.image1} flex={1} flexBasis={1} />
                </Center>
                <CategoryBtn>Women</CategoryBtn>
              </VStack>
            </Box>
          </GridItem>
          <GridItem rowSpan={2} mt={20}>
            <Box
              maxW="md"
              borderWidth="1px"
              borderRadius="xl"
              className="BoxItem"
            >
              <Center>
                <Image src={renderCategories.image2} flex={1} flexBasis={1} />
              </Center>
              <VStack>
                <CategoryBtn>Men</CategoryBtn>
              </VStack>
            </Box>
          </GridItem>
          <GridItem rowSpan={1}>
            <Box
              maxW="md"
              borderWidth="1px"
              borderRadius="xl"
              className="BoxItem"
            >
              <VStack>
                <Center>
                  <Image src={renderCategories.image3} flex={1} flexBasis={1} />
                </Center>
                <CategoryBtn>Kids</CategoryBtn>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  );
};

export default GenderCategory;
