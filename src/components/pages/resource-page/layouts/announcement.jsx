import announcements from '../../../../databases/announcement.json';
import { Link } from 'react-router-dom';

const AnnouncementList = () => {
  return (
    <section className="announcements">
      <h2>Announcements</h2>
      <div className="announcement-list">
        {announcements.map((announcement, index) => (
          <div key={index} className="announcement-card">
            <Link
              to={{
                pathname: `/resources/announcements/${announcement.id}`,
                state: { announcement: announcement },
              }}
            >
              <h3>{announcement.title}</h3>
              <p>{announcement.details}</p>
            </Link>
          </div>
        ))}
      </div>
      <a href="/resources/announcements" className="loadmore">
        Load more
      </a>
    </section>
  );
};

export default AnnouncementList;