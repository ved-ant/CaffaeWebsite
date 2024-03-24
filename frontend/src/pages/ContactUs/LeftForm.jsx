import React from "react";
import FormImg from "../../assets/formimg.png";
import "./leftForm.css";

function LeftForm() {
  return (
    <div className="outline">
      <img src={FormImg} alt="" className="image" />
      <p>Bits Pilani pilani, rajasthan 333031, IN</p>
      <p>Phone- +91 9518594249</p>
      <p>Website- caffae.in</p>
    </div>
  );
}

export default LeftForm;
