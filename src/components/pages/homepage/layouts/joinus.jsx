import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const JoinUs = () => {
  return (
    <section className="joinus">
      <h2>Join Our Community</h2>
      <p>
        Connect with a global network of changemakers and start collaborating on
        projects that make a difference.
      </p>
      <Link to="/community" className="">
        <button className="join">Get Started</button>
      </Link>
    </section>
  );
};

export default JoinUs;
