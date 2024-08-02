import sdgs from '../../../../databases/Sdgs.json';
import img from '../../../../assets/images/vision3.png'
import {Link} from 'react-router-dom'

const SDGList = () => {
  return (
    <section className="sdgs-info">
      <h2>Information on SDGs</h2>
      <div className="sdgs-list">
        {sdgs.map((sdg, index) => (
          <div key={index} className="sdg-card">
            <Link
              to={{
                pathname: `/sdgs/${sdg.id}`,
                state: { sdg: sdg },
              }}
            >
              <img src={img} alt={sdg.title} />
              <h3>{sdg.title}</h3>
              <p>{sdg.description}</p>
            </Link>
          </div>
        ))}
      </div>
      <a href="/sdgs" className="loadmore">
        Load more
      </a>
    </section>
  );
};

export default SDGList;