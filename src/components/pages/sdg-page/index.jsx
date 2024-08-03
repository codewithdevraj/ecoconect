import sdgs from "../../../databases/Sdgs.json";
import "./style.css"; // Ensure you have the CSS for styling
import { Link } from "react-router-dom";

const SdgsPage = () => {
  return (
    <div className="sdgs-section">
      <h2>SDGs</h2>
      <div className="sdgs-container">
        {sdgs.map((sdg) => (
          <div key={sdg.id} className="sdg-card">
            {/* <img src={sdg.imgSrc} alt={sdg.title} /> */}
            <img src="https://via.placeholder.com/300x200" alt={sdg.title} />
            <Link to={`/resources/sdgs/${sdg.id}`}>
              <h3>{sdg.title}</h3>
              <p>{sdg.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SdgsPage;
