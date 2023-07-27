import React, { useState } from 'react';
import axios from 'axios';
import './Footer.css';
import image1 from '../../assets/mention.png';
import image2 from '../../assets/linkedin.png';
import image3 from '../../assets/instagram.png';
import yt from '../../assets/vector.png'

const Footer = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    query: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setContactForm({
      ...contactForm,
      [name]:value
    });
  }

  const createEntry = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/contact-create', contactForm);
    setContactForm({
      name: "",
      email: "",
      query: ""
    });
  }

  return (
    <div className="footer-container">
      <div className='footer-form_section'>
        <div className='footer-image'>
          <img src={image1} className='footer-sub_image' />
        </div>
        <div className='footer-space'></div>
        <div className='footer-form'>
          <form onSubmit={createEntry}>
            <p>Your Name</p>
            <input name="name" value={contactForm.name} onChange={handleChange} type="text" className="footer-form-field"  placeholder="Your Name" />
            <p>Your E-Mail</p>
            <input name="email" value={contactForm.email} onChange={handleChange} type="email" className="footer-form-field" placeholder="Ex. yourname@example.com" />
            <p>Eager to receive personalized advice? Drop your question here for Gurus to answer!</p>
            <textarea name="query" value={contactForm.query} onChange={handleChange} type="text" className="footer-form-field textarea"  placeholder="Write your question." />
            <button type="submit" className="footer-form-btn">Submit</button>
          </form>
        </div>
      </div>
      <div className='footer-divider'></div>
      <div className='footer-social_section'>
        <div className='footer-social_section-header'>Follow Us!</div>
        <div className='footer-social_section-social_handles'>
          <a href="https://www.linkedin.com/company/caffae/" className='footer-social_section-social_handles-handle' target='_blank'><img src={yt} /></a>
          <a href="https://www.linkedin.com/company/caffae/" className='footer-social_section-social_handles-handle' target='_blank'><img src={image2} /></a>
          <a href="https://www.instagram.com/caffae.in/" className='footer-social_section-social_handles-handle' target='_blank'><img src={image3} /></a>
        </div>
        <div className='footer-social_section-mail'>
          <p><b>Contact Us</b><br />
          <a href="mailto:caffae.in@gmail.com" >caffae.in@gmail.com</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer;