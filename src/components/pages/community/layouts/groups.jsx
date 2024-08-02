import groups from "../../../../databases/groups.json";

const Groups = () => {

  return (
    <section className="community-section" id="groups">
      <h2>Groups</h2>
      <div className="cards-container" id="groups-container">
        {groups
          .slice(0, 6)
          .map((group) => (
          <div key={group.id} className="card">
            <img src={group.image} alt={group.name} />
            <h3>{group.name}</h3>
            <p>{group.description}</p>
          </div>
        ))}
      </div>
      <a href="/groups" className="cta-button">
        View All Groups
      </a>
    </section>
  );
};

export default Groups;
