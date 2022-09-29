import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopSection from "../components/homeComponents/ShopSection";
import CallToActionSection from "../components/homeComponents/CalltoActionSection";
import ContactInfo from "../components/homeComponents/ContactInfo";
const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <ShopSection />
      <CallToActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
