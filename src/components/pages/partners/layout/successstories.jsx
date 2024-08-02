import image from "../../../../assets/images/Designer (6).png";
import React, {
  useEffect,
  useState,
} from "react";

const successStories = [
  {
    title: "Success Story 1",
    image: "/assets/images/Designer (6).png",
    description: "Brief description of success story 1.",
    link: "#",
  },
  {
    title: "Success Story 2",
    image: "/assets/images/Designer (6).png",
    description: "Brief description of success story 2.",
    link: "#",
  },
  {
    title: "Success Story 1",
    image: "/assets/images/Designer (6).png",
    description: "Brief description of success story 1.",
    link: "#",
  },
  {
    title: "Success Story 2",
    image: "/assets/images/Designer (6).png",
    description: "Brief description of success story 2.",
    link: "#",
  },
  {
    title: "Success Story 1",
    image: "/assets/images/Designer (6).png",
    description: "Brief description of success story 1.",
    link: "#",
  },
  {
    title: "Success Story 2",
    image: "/assets/images/Designer (6).png",
    description: "Brief description of success story 2.",
    link: "#",
  },
  // Add more success stories as needed
];

const SuccessStory = ({ story }) => {
  return (
    <div className="story">
      <img src={image} alt={story.title} />
      <div className="story-wrap">
        <h3>{story.title}</h3>
        <p>{story.description}</p>
        <a href={story.link}>Read More</a>
      </div>
    </div>
  );
};

const SuccessStories = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prevIndex) =>
        prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="success-stories">
      <h2>Success Stories</h2>
      <div className="carousel">
        <div className="stories">
          {successStories.map((story, index) => (
            <div
              key={index}
              className={`story-container ${
                index === currentStoryIndex ? "visible" : "hidden"
              }`}
            >
              <SuccessStory story={story} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
