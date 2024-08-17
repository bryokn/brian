import React from "react";
import "./Contact.css";

// Create a context for images
const icon = require.context("./images/icon", false, /\.(png|jpe?g|svg)$/);

const email = "kipkiruibn@gmail.com"; // Change this to your email

const Contact = () => {
  return (
    <div className="contact section" id="contact">
      <h2>Talk to me...</h2>
      <div className="contact-container">
        <div className="contact-form-container">
          <div className="contact-form-content">
            <div className="email-container">
              <img
                src={icon("./gmail.svg")}
                className="email-icon"
                alt="email-icon"
              />
              <h3>{email}</h3>
            </div>

            <div className="contact-or">
              <span> or </span> <hr />
            </div>

            <p>Feel free to reach out to me through the form below.</p>
            {/* Change to your action link from Formspree */}
            <form
              className="contact-form"
              method="POST"
              action="https://formspree.io/f/xrbzkdoz"
            >
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                S E N D
              </button>
            </form>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036281522!2d36.70730736763741!3d-1.3032080805419576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1692110892893!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            title="Google Maps - Nairobi, Kenya"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
