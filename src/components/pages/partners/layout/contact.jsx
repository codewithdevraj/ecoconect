
const ContactForPartner = () => {
  return (
    <section className="contact-partnerships">
        <h2>Contact Us for Partnerships</h2>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" required/>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Emaile Here!" required/>
          <label for="organization">Organization:</label>
          <input type="text" id="organization" name="organization" placeholder="Your organization"/>
          <label for="message">Message:</label>
          <textarea id="message" name="message" placeholder="Write Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <p>Email: contact@ecoconnecthub.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </section>
  )
}

export default ContactForPartner;