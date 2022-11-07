import { Center, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { SliderItem } from "./SliderItem";
import Marquee from "react-fast-marquee";
const ClientsLogo = () => {
  const logoRender = [
    {
      id: 1,
      sourceImages: "/images/adidasLogo.png",
    },
    {
      id: 2,
      sourceImages: "/images/nikeLogo.png",
    },
    {
      id: 3,
      sourceImages: "/images/nbLogo.png",
    },
    {
      id: 4,
      sourceImages: "/images/pumaLogo.png",
    },
    {
      id: 5,
      sourceImages: "/images/vansLogo.png",
    },
    {
      id: 6,
      sourceImages: "/images/converseLogo.png",
    },
    {
      id: 7,
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
          <Marquee speed={100} gradientWidth="50px" key={item.id}>
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
