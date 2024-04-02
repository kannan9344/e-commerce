import React, { useContext } from 'react'
import Banner from '../../components/Banner/Banner'
import Offer from '../../components/Offer/Offer'
import Category from '../../components/Category/Category'
import FeaturePro from '../../components/Fproducts/FeaturePro'
import Offer_banner from '../../components/Offer-banner/Offer_banner'
import Service from '../../components/Services/Service'
import Modal from '../../components/Modal/Modal'
import { ContentData } from '../../App'

const Home = () => {
  const {modalstate,setModalstate}=useContext(ContentData);
  return (
    <>
        <Banner/>
        <Offer/>
        <Category/>
        <FeaturePro modalstate={modalstate} setModalstate={setModalstate}/>
        <Offer_banner/>
        <Service/>
        <Modal modalstate={modalstate} setModalstate={setModalstate}/>
    </>
  )
}

export default Home;