import "./style.css";
import CommunityHero from "./layouts/hero";
import Forum from "./layouts/forum";
import Groups from "./layouts/groups";
import Events from "./layouts/Events";

const CommunityContentSetup = () => {
  return (
    <section class="community-content">
      <Forum />
      <Groups />
      <Events />
    </section>
  );
};

const Community = () => {
  return (
    <>
      <CommunityHero />
      <CommunityContentSetup />
    </>
  );
};

export default Community;
