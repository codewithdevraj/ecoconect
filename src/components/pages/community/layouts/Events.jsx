import events from "../../../../databases/events.json";

const Events = () => {
  return (
    <section className="community-section" id="events">
      <h2>Upcoming Events</h2>
      <div className="cards-container" id="events-container">
        {events
          .slice(0, 6)
          .map((event) => (
          <div key={event.id} className="card">
            <img src={event.imgSrc} alt={event.title} />
            <h3>{event.title}</h3>
            <p id="eventDate">{event.date}</p>
            <p>{event.details}</p>
          </div>
        ))}
      </div>
      <a href="/events" className="cta-button">
        View All Events
      </a>
    </section>
  );
};

export default Events;
