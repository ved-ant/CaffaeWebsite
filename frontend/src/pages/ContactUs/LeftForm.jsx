import React from "react";
import FormImg from "../../assets/formimg.png";
import LogoImg from "../../assets/contactLogo.png";
import LocImg from "../../assets/location.png";
import PhnImg from "../../assets/phone.png";
import WebImg from "../../assets/web.png";
import InsImg from "../../assets/instacolor.png";
import LinkImg from "../../assets/linkcolor.png";
import "./leftForm.css";

function LeftForm() {
  return (
    <div className="outline1">
      <img src={FormImg} alt="" className="image1" />
      <img
        style={{ maxWidth: "175px", position: "relative", top: "-60px" }}
        src={LogoImg}
        alt=""
      />
      <div style={{ position: "relative", top: "-60px" }}>
        <p>
          {" "}
          <span>
            <img src={LocImg} alt="" />
          </span>
          Bits Pilani Pilani, Rajasthan 333031, IN
        </p>
        <p>
          <span>
            <img src={PhnImg} alt="" />
          </span>
          Phone- +91 9518594249
        </p>
        <p>
          <span>
            <img src={WebImg} alt="" />
          </span>
          Website- caffae.in
        </p>
      </div>
      <span className="socials">
        <a href="https://www.instagram.com/caffae.in/">
          <img src={InsImg} alt="" />
        </a>
        <a href="https://www.linkedin.com/company/caffae/">
          <img src={LinkImg} alt="" />
        </a>
      </span>
    </div>
  );
}

export default LeftForm;
