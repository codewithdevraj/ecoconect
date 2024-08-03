import announcements from "../../../databases/announcement.json";
import "./style.css"; // Ensure you have the CSS for styling

const AnnouncementsPage = () => {
  return (
    <div className="announcements-section">
      <h2>Announcements</h2>
      <div className="announcements-container">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="announcement-card">
            <h3>{announcement.title}</h3>
            <p>{announcement.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsPage;
