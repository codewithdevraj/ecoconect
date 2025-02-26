import events from "../../../../databases/events.json";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section className="community-section" id="events">
      <h2>Upcoming Events</h2>
      <div className="cards-container" id="events-container">
        {events.slice(0, 6).map((event) => (
          <div key={event.id} className="card">
            <Link
              to={{
                pathname: `/events/${event.id}`,
                state: { event: event },
              }}
            >
              <img src={event.imgSrc} alt={event.title} />
              <h3>{event.title}</h3>
              <p id="eventDate">{event.date}</p>
              <p>{event.details}</p>
            </Link>
          </div>
        ))}
      </div>
      <a href="/community/events" className="cta-button">
        View All Events
      </a>
    </section>
  );
};

export default Events;
