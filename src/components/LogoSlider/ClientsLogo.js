import { Center, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { SliderItem } from "./SliderItem";
import Marquee from "react-fast-marquee";
const ClientsLogo = () => {
  const logoRender = [
    {
      sourceImages: "/images/adidasLogo.png",
    },
    {
      sourceImages: "/images/nikeLogo.png",
    },
    {
      sourceImages: "/images/nbLogo.png",
    },
    {
      sourceImages: "/images/pumaLogo.png",
    },
    {
      sourceImages: "/images/vansLogo.png",
    },
    {
      sourceImages: "/images/converseLogo.png",
    },
    {
      sourceImages: "/images/crocsLogo.png",
    },
  ];

  return (
    <Container maxW="container.xl" className="mt-5">
      <Center height={200}>
        <Heading as="h2" size="2xl" textTransform="uppercase" fontWeight={700}>
          Thương hiệu đối tác
        </Heading>
      </Center>

      <SliderItem height={300}>
        {logoRender.map((item) => (
          <Marquee speed={100} gradientWidth="50px">
            <Image
              src={item.sourceImages}
              width={100}
              height={70}
              alt="didanstore"
              objectFit="contain"
            />
          </Marquee>
        ))}
      </SliderItem>
    </Container>
  );
};

export default ClientsLogo;
