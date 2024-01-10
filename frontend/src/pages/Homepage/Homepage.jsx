import React from 'react';
import Infocard from '../../components/Infocard/Infocard';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import Community from '../../components/Community/Community';
import Googleform from '../../components/Googleform/Googleform';
import LeftDesc from '../../components/LeftDesc/LeftDesc';
import UserDescSection from '../../components/UserDescSection/UserDescSection';
import GuruDescSection from '../../components/GuruDescSection/DescSection';

const Homepage = () => {
  return (
    <>
        <Header />
        <LeftDesc title="Caffae is not just an app" text="It's your portal to a global community of shared expertise and inspiration. Our networking software unites individuals worldwide, facilitating connections that transcend distances. Whether exploring a new hobby or seeking professional guidance, Caffae empowers you to connect with like-minded mentors. Navigate a world of knowledge, advice, and collaboration with Caffae – where every connection enriches your journey and elevates your pursuits."></LeftDesc>
        <Infocard></Infocard>
      
        <Googleform />
        <Community />
        <Footer />
    </>
  )
}

export default Homepage;