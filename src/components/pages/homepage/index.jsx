import Hero from "./layouts/hero";
import AboutUs from "./layouts/aboutus";
import KeyFeatures from "./layouts/key-features";
import HowItWorks from "./layouts/hwitwrk";
import SuccessStories from "./layouts/success-stories";
import JoinUs from "./layouts/joinus";
import Blogs from "./layouts/blogs";
import './style.css'
import { useEffect, useState } from "react";
const Homepage = () => {
  const [token, settoken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    if (!token) {
      window.location.href = '/login'
    }
  },[])
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
