import React from "react";
import { Flex } from "@chakra-ui/react";
import ShopSection from "../components/homeComponents/ShopSection";
import ContactInfo from "../components/homeComponents/ContactInfo";
import HeroCarousel from "../components/homeComponents/HeroCarousel";
import ClientsLogo from "../components/LogoSlider/ClientsLogo";
import GenderCategory from "../components/homeComponents/genderCategory";
const HomeScreen = ({ match }) => {
  // window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber;

  return (
    <Flex direction="column" flex="1">
      <HeroCarousel />
      <ContactInfo />
      <ClientsLogo />
      <ShopSection keyword={keyword} pageNumber={pageNumber} />
      <GenderCategory />
    </Flex>
  );
};

export default HomeScreen;
