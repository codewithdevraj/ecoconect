import events from '../../../../databases/events.json';

const EventList = () => {
  return (
    <section className="events">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {events
          .slice(0,5)
          .map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.details}</p>
            <a href={`/community/events/${event.id}`}>More Info</a>
          </div>
        ))}
      </div>
      <a href="/community/events" className="loadmore">
        Load more
      </a>
    </section>
  );
};

export default EventList;