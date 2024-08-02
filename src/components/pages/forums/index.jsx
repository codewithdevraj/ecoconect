import forums from "../../../databases/forum.json";
import "./style.css"; // Ensure you have the CSS for styling

const ForumsPage = () => {
  return (
    <div className="forums-section">
      <h2>Forums</h2>
      <div className="forums-container">
        {forums.map((forum) => (
          <div key={forum.id} className="forum-card">
            <img src={forum.image} alt={forum.title} />
            <h3>{forum.title}</h3>
            <p>{forum.date}</p>
            <p>{forum.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumsPage;
