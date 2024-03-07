import React, { Fragment } from "react";
import Footer from "./Footer";
import HeroSec from "./HeroSection";
import Vision from "./vision";
import Team from "./team";
import How from "./how";
const AboutUs = () =>
{
    return <div style={{display:'flex', flexDirection:'column' }}>
    <HeroSec></HeroSec>
    <Vision></Vision>
    <Team></Team>
   <How></How>
     <Footer></Footer>
     </div>
  
}

export default AboutUs