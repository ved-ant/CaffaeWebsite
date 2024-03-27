import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ContactForm from "./ContactForm";
import Footer from "../../components/Footer/Footer";
import "./contactUs.css";

function ContactUs() {
  return (
    <div>
      <div className="form">
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ContactUs;
