import bg from "../../../../assets/images/bg1-hero.jpg";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="hero-wrap">
      <img src={bg} alt="Background" />
      <div className="hero-bg"></div>
      <div className="hero">
        <h1>Connecting Partnerships for a Sustainable Future</h1>
        <p>
          Join a global network dedicated to fostering collaboration and
          achieving the Sustainable Development Goals.
        </p>
      </div>
      <div className="hero-btn">
        <Link to="/community">
          <button className="join">Join Now</button>
        </Link>
        <Link to="/about">
          <button className="learn">Learn More</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
