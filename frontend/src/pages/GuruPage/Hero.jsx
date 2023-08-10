import { Fragment } from "react";

import styl from "./herostyles.module.css";

const HeroSection = () => {
  return (
    <Fragment>
      <div className={styl.herosection}>
        <div className={styl.herotext}>
          <span className={styl.one}> Become a Guru at Caffae </span>and empower
          numerous individuals to achieve their goals.
        </div>
       <a href="https://forms.gle/9oTcnE91NDdJJWgG8" target="_blank"><button className={styl.ctaButton}>Become a Guru</button></a> 
      </div>
    </Fragment>
  );
};

export default HeroSection;

