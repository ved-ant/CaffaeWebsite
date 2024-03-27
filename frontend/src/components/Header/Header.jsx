import React from "react";
import "./Header.css";
import image2 from "../../assets/headerImg.png";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left_desc-text">
        <div className="header-desc_text-container">
          <div className="header-title">
            India’s First 1:1 Personalized Guidance App
            <span className="header-other"> Unlocked!</span>
          </div>
          <div className="header-desc">
            Bridging Aspirations to Achievements: Connect with Gurus on Caffae
            for Personalized Success.
          </div>
          <button className="header-button">Download Caffae</button>
        </div>
      </div>
      <div className="header-left_desc-image">
        <img src={image2} className="header-left_desc-top_image" />
      </div>
    </div>
  );
};

export default Header;
