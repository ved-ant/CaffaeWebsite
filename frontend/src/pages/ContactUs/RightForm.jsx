import React from "react";
import "./rightForm.css";

function formSubmit(e) {
  e.preventDefault();
}

function RightForm() {
  return (
    <div className="outline2">
      <p className="head2">Contact Us Form</p>
      <p
        style={{
          fontSize: " 0.9rem",
          color: "white",
          marginTop: "-10px",
          marginBottom: "30px",
        }}
      >
        Please feel free to contact us{" "}
      </p>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="" placeholder="Enter your name" />
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          id=""
          placeholder="Enter your phone number"
        />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="" placeholder="Enter your Email" />
        <label htmlFor="message">Message</label>
        <textarea
          className="msg"
          name="message"
          id=""
          cols="30"
          rows="4"
          placeholder="Type your message here"
        ></textarea>
        <button onSubmit={formSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default RightForm;
