const Footer = () => {
  return (
    <footer>
      <div className="row primary">
        <div className="column about">
          <h3>Eco Connect Hub</h3>
          <p>
            "Empowering global partnerships for sustainable development through
            collaboration and innovation."
          </p>
          <div className="social">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
            <i className="fa-brands fa-youtube-square"></i>
            <i className="fa-brands fa-whatsapp-square"></i>
          </div>
        </div>

        <div className="column links">
          <h3>Some Links</h3>
          <ul>
            <li>
              <a href="#faq">F.A.Q</a>
            </li>
            <li>
              <a href="#cookies-policy">Cookies Policy</a>
            </li>
            <li>
              <a href="#terms-of-services">Terms Of Service</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>

        <div className="column links">
          <h3>Some Links</h3>
          <ul>
            <li>
              <a href="#faq">F.A.Q</a>
            </li>
            <li>
              <a href="#cookies-policy">Cookies Policy</a>
            </li>
            <li>
              <a href="#terms-of-services">Terms Of Service</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>

        <div className="column subscribe">
          <h3>Newsletter</h3>
          <div>
            <input type="email" placeholder="Your email id here" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="row copyright">
        <div className="footer-menu">
          <a href="home">Home</a>
          <a href="link">About</a>
          <a href="link">Contact</a>
          <a href="link">Blog</a>
          <a href="link">Social</a>
        </div>
        <p>Copyright &copy; 2021 Foolish Developer</p>
      </div>
    </footer>
  );
};

export default Footer;
