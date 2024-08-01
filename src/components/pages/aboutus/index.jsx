import AboutHero from "./layouts/abt-hero";
import AbtMission from "./layouts/abt-mission";
import Story from "./layouts/abt-story";
import AbtTeam from "./layouts/abt-team";
import Vision from "./layouts/abt-vission";
import JoinUs from "../homepage/layouts/joinus";
import "./style.css";

const About = () => {
  return (
    <>
      <AboutHero />
      <AbtMission />
      <Vision />
      <Story />
      <AbtTeam />
      <JoinUs />
    </>
  );
};

export default About;
