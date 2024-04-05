import React, { useContext, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Offer from "../../components/Offer/Offer";
import Category from "../../components/Category/Category";
import FeaturePro from "../../components/Fproducts/FeaturePro";
import Offer_banner from "../../components/Offer-banner/Offer_banner";
import Service from "../../components/Services/Service";
// import { ContentData } from "../../App";

const Home = () => {
  return (
    <>
      <Banner />
      <Offer />
      <Category />
      <FeaturePro />
      <Offer_banner />
      <Service />
    </>
  );
};

export default Home;
