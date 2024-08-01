import vision1 from "../../../../assets/images/vision1.png";
import vision2 from "../../../../assets/images/vision2.png";
import vision3 from "../../../../assets/images/vision3.png";
const Vision = () => {
  return (
    <section className="abt-vision">
      <h2>Our Vision</h2>
      <div className="vision-wrap">
        <div className="vision-card">
          <img src={vision1} alt="Global Collaboration" />
          <h3>Global Collaboration</h3>
          <p>
            Connecting stakeholders globally to work together towards common
            goals.
          </p>
        </div>
        <div className="vision-card">
          <img src={vision2} alt="Resource Sharing" />
          <h3>Resource Sharing</h3>
          <p>
            Enabling efficient use of resources through shared platforms and
            tools.
          </p>
        </div>
        <div className="vision-card">
          <img src={vision3} alt="Knowledge Exchange" />
          <h3>Knowledge Exchange</h3>
          <p>
            Fostering innovation and learning by sharing best practices and case
            studies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
