import React from "react";
import DescText from "../DescText/DescText";
import "./LeftDesc.css";
import descImg from "../../assets/descImg.png";

const LeftDesc = ({ title, text, image1, image2 }) => {
  return (
    <div className="left_desc-container">
      <div className="left_desc-text">
        <DescText title={title} text={text} />
      </div>
      <div className="left_desc-space"></div>
      <div className="left_desc-image">
        <img src={image1} className="left_desc-bg_ellipse" />
        <img src={image2} className="left_desc-top_image" />
      </div>
      {/* <img src={descImg} alt="" /> */}
    </div>
  );
};

export default LeftDesc;
