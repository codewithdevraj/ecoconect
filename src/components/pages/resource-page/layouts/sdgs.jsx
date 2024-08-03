import sdgs from '../../../../databases/Sdgs.json';
import {Link} from 'react-router-dom'

const SDGList = () => {
  return (
    <section className="sdgs-info">
      <h2>Information on SDGs</h2>
      <div className="sdgs-list">
        {sdgs.slice(0, 9).map((sdg, index) => (
          <div key={index} className="sdg-card">
            <Link
              to={{
                pathname: `/resources/sdgs/${sdg.id}`,
                state: { sdg: sdg },
              }}
            >
              <img src={sdg.imgSrc} alt={sdg.title} />
              <h3>{sdg.title}</h3>
              <p>{sdg.description}</p>
            </Link>
          </div>
        ))}
      </div>
      <a href="/resources/sdgs" className="loadmore">
        Load more
      </a>
    </section>
  );
};

export default SDGList;