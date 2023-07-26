import { Fragment } from "react";

import styl from "./herostyles.module.css";

const HeroSection = () => {
  return (
    <Fragment>
      <div className={styl.herosection}>
        <div className={styl.logocontainer}>
          <div className={styl.logoimg} />
          <div className={styl.logotext} />
        </div>
        <div className={styl.herotext}>
          <span className={styl.one}> Become a Guru at Caffae </span>and empower
          numerous individuals to achieve their goals.
        </div>
        <div className={styl.ctaButton}>Become a Guru</div>
      </div>
    </Fragment>
  );
};

export default HeroSection;

