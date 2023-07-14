import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import DescSection from '../../components/DescSection/DescSection';
import Community from '../../components/Community/Community';
import Googleform from '../../components/Googleform/Googleform';

const Homepage = () => {
  return (
    <>
        <Header />
        <DescSection />
        <Googleform />
        <Community />
        <Footer />
    </>
  )
}

export default Homepage;