import Hero from "./layouts/hero";
import AboutUs from "./layouts/aboutus";
import KeyFeatures from "./layouts/key-features";
import HowItWorks from "./layouts/hwitwrk";
import SuccessStories from "./layouts/success-stories";
import JoinUs from "./layouts/joinus";
import Blogs from "./layouts/blogs";
import './style.css'
const Homepage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <KeyFeatures />
      <HowItWorks />
      <SuccessStories />
      <JoinUs />
      <Blogs />
    </>
  );
};

export default Homepage;
