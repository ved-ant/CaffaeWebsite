import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styl from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styl.nav}>
      <div className={styl.navl}>
        <div className={styl.logocontainer}>
          <div className={styl.logoimg} />
          <div className={styl.logotext} />
        </div>
      </div>
      <div className={styl.navr}>
        <Link to="/">
          <ele >HOME</ele>
        </Link>
        <Link to="/guru">
          <ele >BECOME A GURU</ele>
        </Link>
        <Link to="/about">
          <ele > ABOUT US</ele>
        </Link>
        <Link to="/about">
          <ele > CONTACT US</ele>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

const ele = ({children}) => {
  return <span style={styl.ele}>{children}</span>;
};
