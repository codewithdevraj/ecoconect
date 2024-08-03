import events from "../../../databases/events.json";
import "./style.css"; // Ensure you have the CSS for styling

const EventsPage = () => {
  return (
    <div className="events-section">
      <h2>Events</h2>
      <div className="events-container">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.imgSrc} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
