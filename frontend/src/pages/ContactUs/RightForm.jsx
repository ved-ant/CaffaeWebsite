import React from "react";
import "./rightForm.css";

function formSubmit() {}

function RightForm() {
  return (
    <div className="outline2">
      <p className="head2">Contact Us Form</p>
      <p style={{ fontSize: " 0.9rem", color: "white", marginTop: "-10px" }}>
        Please feel free to contact us{" "}
      </p>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="" placeholder="Enter your name" />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id=""
          placeholder="Enter your phone number"
        />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="" placeholder="Enter your Email" />
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          id=""
          placeholder="Type your message here"
          className="msg"
        />
        <button onSubmit={formSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default RightForm;
