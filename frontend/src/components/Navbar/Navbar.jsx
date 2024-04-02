import { useState } from "react";
import "./Navmodule.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/contactLogo.png";
import { click } from "@testing-library/user-event/dist/click";

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // };

  // // adding the states
  // const [isActive, setIsActive] = useState(false);

  // //add the active class
  // const toggleActiveClass = () => {
  //   setIsActive(!isActive);
  // };

  // //clean up function to remove the active class
  // const removeActive = () => {
  //   setIsActive(false);
  // };

  const [clicked, setClicked] = useState(false);

  function handleHamburger() {
    if (clicked === false) setClicked(true);
    else setClicked(false);

    const navmenu = document.getElementById("navmen");
    const ham = document.getElementById("ham");

    navmenu.classList.toggle("nav-active");
    ham.classList.toggle("nav-active");

    console.log("works");
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          {/* logo */}
          <a href="/" className="logo">
            <img src={Logo} alt="" />
          </a>

          <ul className="navMenu" id="navmen">
            <li
            // onClick={toggleActiveClass}
            // className={`${isActive ? styles.active : """
            >
              <a href="/" className="navLink">
                HOME
              </a>
            </li>
            <li
            // onClick={toggleActiveClass}
            // className={`${isActive ? styles.active : """
            >
              <a href="/aboutus" className="navLink">
                ABOUT US
              </a>
            </li>
            <li
            // onClick={toggleActiveClass}
            // className={`${isActive ? styles.active : """
            >
              <a href="/guru" className="navLink">
                BECOME A GURU
              </a>
            </li>
            <li
            // onClick={toggleActiveClass}
            // className={`${isActive ? styles.active : """
            >
              <a href="/contactus" className="navLink">
                CONTACT US
              </a>
            </li>
          </ul>
          <div
            className="hamburger"
            onClick={handleHamburger}
            id="ham"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
