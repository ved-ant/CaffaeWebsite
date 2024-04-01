import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/contactLogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // adding the states
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <a href="/" className={`${styles.logo}`}>
            <img src={Logo} alt="" />
          </a>

          <ul className={`${styles.navMenu}`}>
            <li
            // onClick={toggleActiveClass}
            // className={`${isActive ? styles.active : ""}`}
            >
              <a href="/" className={`${styles.navLink}`}>
                HOME
              </a>
            </li>
            <li
            // onClick={toggleActiveClass}
            // className={`${isActive ? styles.active : ""}`}
            >
              <a href="/aboutus" className={`${styles.navLink}`}>
                ABOUT US
              </a>
            </li>
            <li
            // onClick={toggleActiveClass}
            // className={`${isActive ? styles.active : ""}`}
            >
              <a href="/guru" className={`${styles.navLink}`}>
                BECOME A GURU
              </a>
            </li>
            <li
            // onClick={toggleActiveClass}
            // className={`${isActive ? styles.active : ""}`}
            >
              <a href="/contactus" className={`${styles.navLink}`}>
                CONTACT US
              </a>
            </li>
          </ul>
          


        </nav>
      </header>
    </div>
  );
}

export default Navbar;
