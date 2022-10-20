import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopSection from "../components/homeComponents/ShopSection";
import CallToActionSection from "../components/homeComponents/CalltoActionSection";
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
      <Header />
      <HeroCarousel />
      <ContactInfo />
      <ClientsLogo />
      <ShopSection keyword={keyword} pageNumber={pageNumber} />
      <GenderCategory />
      {/* <CallToActionSection /> */}
      <Footer />
    </Flex>
  );
};

export default HomeScreen;
