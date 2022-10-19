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
} from "@chakra-ui/react";

const GenderCategory = () => {
  const renderCategories = {
    image1: `/images/1.png`,
    title1: `nam`,
    image2: `/images/2.png`,
    title2: `nu`,
    image3: `/images/3.png`,
    title3: `treem`,
  };
  return (
    <Container maxW="max-content" mb={40}>
      <Center h={100}>
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
          <GridItem colSpan={1} bg="tomato">
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src={renderCategories.image1}
                alt={renderCategories.image1}
              />
            </Box>
          </GridItem>
          <GridItem rowSpan={2} bg="tomato">
            <Image
              src={renderCategories.image3}
              alt={renderCategories.image3}
            />
          </GridItem>
          <GridItem rowSpan={1} bg="blackAlpha.400">
            <Image
              src={renderCategories.image2}
              alt={renderCategories.image2}
            />
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  );
};

export default GenderCategory;
