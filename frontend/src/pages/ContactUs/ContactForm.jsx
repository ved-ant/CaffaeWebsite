import React from "react";
import LeftForm from "./LeftForm";
import RightForm from "./RightForm";
import "./contactForm.css";

function ContactForm() {
  return (
    <div className="outerbox">
      <LeftForm></LeftForm>
      <RightForm></RightForm>
    </div>
  );
}

export default ContactForm;
