import forums from '../../../../databases/forum.json'
import { Link } from 'react-router-dom';

const Forum = () => {

  return (
    <section className="community-section" id="forums">
      <h2>Recent Forums</h2>
      <div className="cards-container">
        {forums.slice(0, 3).map((forum) => (
          <div key={forum.id} className="card">
            <Link
              to={{
                pathname: `/forums/${forum.id}`,
                state: { forum: forum },
              }}
            >
              <img
                src="https://via.placeholder.com/300x200"
                alt={forum.title}
              />
              <h3>{forum.title}</h3>
              <p>{forum.description}</p>
            </Link>
          </div>
        ))}
      </div>
      <a href="/forums" className="cta-button">
        View All Forums
      </a>
    </section>
  );
};

export default Forum;
