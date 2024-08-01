import React, { useEffect } from "react";

const HowItWorks = () => {
  useEffect(() => {
    const scrollbarFill = document.querySelector(".scrollbar-fill");
    const scrollDiv = document.querySelector("#hitw");

    const handleScroll = () => {
      const rect = scrollDiv.getBoundingClientRect();
      const scrollPercent = (1000 - rect.bottom) / 488;

      if (scrollPercent <= 0) {
        scrollbarFill.style.height = "0";
      } else if (scrollPercent >= 1) {
        scrollbarFill.style.height = "100%";
      } else {
        scrollbarFill.style.height = `${scrollPercent * 100}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hitw" id="hitw">
      <div className="scrollbar-wrap">
        <div className="scrollbar">
          <div className="scrollbar-fill"></div>
        </div>
      </div>
      <div className="steps-wrap">
        <h3>Steps: How it Works</h3>
        <div className="steps">
          <h4>1</h4>
          <p>
            Create Your Profile – Sign up and provide information about your
            organization or individual expertise.
          </p>
        </div>
        <div className="steps">
          <h4>2</h4>
          <p>
            Find Partners – Use our AI-powered matching tool to find potential
            partners.
          </p>
        </div>
        <div className="steps">
          <h4>3</h4>
          <p>
            Collaborate – Use our tools to communicate, manage projects, and
            share resources.
          </p>
        </div>
        <div className="steps">
          <h4>4</h4>
          <p>
            Track Progress – Monitor your impact and contribute to achieving the
            SDGs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
