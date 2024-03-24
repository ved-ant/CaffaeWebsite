import React from "react";
import "./rightForm.css";

function fomrSubmit() {}

function RightForm() {
  return (
    <div className="outline">
      <p>Contact Us Form</p>
      <p>Please feel free to contact us </p>
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
        />
        <button onSubmit={fomrSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default RightForm;
