import React from "react";
import { Flex } from "@chakra-ui/react";
import ShopSection from "../components/homeComponents/ShopSection";
import ContactInfo from "../components/homeComponents/ContactInfo";
import HeroCarousel from "../components/homeComponents/HeroCarousel";
import ClientsLogo from "../components/LogoSlider/ClientsLogo";
import GenderCategory from "../components/homeComponents/genderCategory";
const HomeScreen = () => {
  // window.scrollTo(0, 0);

  return (
    <Flex direction="column" flex="1">
      <HeroCarousel />
      <ContactInfo />
      <ClientsLogo />
      <ShopSection />
      <GenderCategory />
    </Flex>
  );
};

export default HomeScreen;
