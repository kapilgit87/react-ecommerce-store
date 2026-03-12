import React, { useState } from "react";
import "./contact.css";
import Footer from "./Footer";
import Header from "./Header";
function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <>
<Header></Header>
    <div className="contact-container">

      <div className="contact-wrapper">

        {/* Address Section */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Feel free to reach out to us anytime.</p>

          <div className="info-item">
            <h4>📍 Address</h4>
            <p>123 Bareilly, India</p>
          </div>

          <div className="info-item">
            <h4>📞 Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-item">
            <h4>✉ Email</h4>
            <p>support@KapilWithGrow.com</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="contact-form">
          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>

          </form>
        </div>

      </div>

    </div>
    <Footer></Footer>
    </>
  );
}

export default Contact;