import { Container } from "@chakra-ui/react";
import React from "react";

export const SliderItem = ({ children, width }) => {
  return (
    <Container
      maxW="7xl"
      className="d-inline-flex justify-content-center align-items-center mb-5"
      width={width}
    >
      {children}
    </Container>
  );
};

export default SliderItem;
