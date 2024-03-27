import { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/contactLogo.png";
import { useEffect } from "react";

function Nav() {
  // adding the states
  const [activeItem, setActiveItem] = useState("Home");

  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };

  //   useEffect(() => {
  //     if (activeItem === "") setActiveItem("Home");
  //   }, [activeItem]);

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <a
            href="/"
            className={`${styles.logo}`}
            onClick={() => handleClick("Home")}
          >
            <img src={Logo} alt="" />
          </a>

          <ul className={`${styles.navMenu}`}>
            <li
              className={`nav-item ${activeItem === "Home" ? "active" : ""}`}
              onClick={() => handleClick("Home")}
            >
              <a href="/" className="nav-link">
                HOME
              </a>
            </li>
            <li
              className={`nav-item ${activeItem === "About" ? "active" : ""}`}
              onClick={() => handleClick("About")}
            >
              <a href="/aboutus" className="nav-link">
                ABOUT US
              </a>
            </li>
            <li
              className={`nav-item ${
                activeItem === "Services" ? "active" : ""
              }`}
              onClick={() => handleClick("Services")}
            >
              <a href="/guru" className="nav-link">
                BECOME A GURU
              </a>
            </li>
            <li
              className={`nav-item ${activeItem === "Contact" ? "active" : ""}`}
              onClick={() => handleClick("Contact")}
            >
              <a href="/contactus" className="nav-link">
                CONTACT US
              </a>
            </li>
          </ul>

          <div
          // className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
          // onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
