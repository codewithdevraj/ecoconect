import sdgs from '../../../../databases/Sdgs.json';
import img from '../../../../assets/images/vision3.png'

const SDGList = () => {
  return (
    <section className="sdgs-info">
      <h2>Information on SDGs</h2>
      <div className="sdgs-list">
        {sdgs.map((sdg, index) => (
          <div key={index} className="sdg-card">
            <img src={img} alt={sdg.title} />
            <h3>{sdg.title}</h3>
            <p>{sdg.description}</p>
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