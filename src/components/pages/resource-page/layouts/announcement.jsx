import announcements from '../../../../databases/announcement.json' 

const AnnouncementList = () => {
  return (
    <section className="announcements">
      <h2>Announcements</h2>
      <div className="announcement-list">
        {announcements.map((announcement, index) => (
          <div key={index} className="announcement-card">
            <h3>{announcement.title}</h3>
            <p>{announcement.details}</p>
          </div>
        ))}
      </div>
      <a href="/announcements" className="loadmore">
        Load more
      </a>
    </section>
  );
};

export default AnnouncementList;