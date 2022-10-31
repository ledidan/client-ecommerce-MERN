import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const Description = (props) => {
  const { product } = props;
  return (
    <Stack className="col-lg-12">
      <Accordion allowToggle>
        <AccordionItem>
          <Heading as="h3" size="18px">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Thông tin sản phẩm
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>{product.description}</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading as="h3" size="18px">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Chính sách shipping và đổi trả
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default Description;
