import './style.css';

const ContactUs = () => {
  return (
    <>
      <section className="contact-hero">
        <div className="text-wrap">
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you. Please reach out with any questions,
            comments, or concerns.
          </p>
        </div>
      </section>

      <section className="contact-us">
        <div className="container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p>
              <strong>Email:</strong> contact@yourcompany.com
            </p>
            <p>
              <strong>Address:</strong> 123 Your Street, Haridwar, Uttarakhand,
              India
            </p>
            <div className="social-icons">
              <a href="facebook" className="social-icon">
                Facebook
              </a>
              <a href="teitter" className="social-icon">
                Twitter
              </a>
              <a href="linkedin" className="social-icon">
                LinkedIn
              </a>
              <a href="instagram" className="social-icon">
                Instagram
              </a>
            </div>
          </div>
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338154.8622788312!2d78.07310259013573!3d29.9457207794051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0c3f52852901%3A0xe8b759da62e497d4!2sHaridwar%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sus!4v1621849367902!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form method="post">
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
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;