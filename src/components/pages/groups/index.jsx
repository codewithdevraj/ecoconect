import groups from "../../../databases/groups.json";
import "./style.css"; // Ensure you have the CSS for styling

const GroupsPage = () => {
  return (
    <div className="groups-section">
      <h2>Groups</h2>
      <div className="groups-container">
        {groups.map((group) => (
          <div key={group.id} className="group-card">
            <img src={group.image} alt={group.name} />
            <h3>{group.name}</h3>
            <p>{group.members}</p>
            <p>{group.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupsPage;
