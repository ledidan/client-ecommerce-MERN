import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <VStack className="justify-content-center">
      <Box
        className="spinner-border text-danger"
        role="status"
        style={{ width: "50px", height: "50px" }}
      ></Box>
      <Heading as="h4" size="md">
        Loading...
      </Heading>
    </VStack>
  );
}
