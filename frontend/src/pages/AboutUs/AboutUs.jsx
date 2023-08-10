import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import HeroSec from "./HeroSection";
import Vision from "./vision";
import Team from "./team";
import How from "./how";
const AboutUs = () =>
{
    return <Fragment>
    <Header></Header>
    <HeroSec></HeroSec>
    <Vision></Vision>
    <Team></Team>
   <How></How>
     <Footer></Footer>
    </Fragment>
}

export default AboutUs