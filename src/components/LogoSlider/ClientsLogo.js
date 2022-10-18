import { Box, Center, Heading, Image } from "@chakra-ui/react";
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
    <>
      <Center h="200px">
        <Heading as="h2" size="3xl" textTransform="uppercase" fontWeight={700}>
          Thương hiệu đối tác
        </Heading>
      </Center>

      <SliderItem>
        {logoRender.map((item) => (
          <Marquee speed={100} pauseOnHover={true}>
            <Image
              src={item.sourceImages}
              width={200}
              height={70}
              alt="didanstore"
              objectFit="contain"
            />
          </Marquee>
        ))}
      </SliderItem>
    </>
  );
};

export default ClientsLogo;
