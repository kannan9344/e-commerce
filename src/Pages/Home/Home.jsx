import React, { useContext, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Offer from "../../components/Offer/Offer";
import Category from "../../components/Category/Category";
import FeaturePro from "../../components/Fproducts/FeaturePro";
import Offer_banner from "../../components/Offer-banner/Offer_banner";
import Service from "../../components/Services/Service";
import Modal from "../../components/Modal/Modal";
import { ContentData } from "../../App";

const Home = () => {
  const { modalstate, setModalstate } = useContext(ContentData);
  const [modalpro, setModalpro] = useState();
  return (
    <>
      <Banner />
      <Offer />
      <Category />
      <FeaturePro
        modalpro={modalpro}
        setModalpro={setModalpro}
        modalstate={modalstate}
        setModalstate={setModalstate}
      />
      <Offer_banner />
      <Service />
      <Modal
        modalstate={modalstate}
        modalpro={modalpro}
        setModalpro={setModalpro}
        setModalstate={setModalstate}
      />
    </>
  );
};

export default Home;
