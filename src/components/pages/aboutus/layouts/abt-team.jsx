import vector from '../../../../assets/icons/vector.png'
const Team = () => {
  return (
    <section className="abt-team">
      <h2>Our Team</h2>
      <div className="team-wrap">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={vector} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const teamMembers = [
  {
    imgSrc: "/assets/icons/Vector.png",
    name: "Devraj",
    role: "Developer & Team leader",
  },
  {
    imgSrc: "/assets/icons/Vector.png",
    name: "Amrit Kumar",
    role: "Developer",
  },
  {
    imgSrc: "/assets/icons/Vector.png",
    name: "Deen Dayal",
    role: "Developer",
  },
  {
    imgSrc: "/assets/icons/Vector.png",
    name: "Priya Kumar",
    role: "Developer",
  },
  {
    imgSrc: "/assets/icons/Vector.png",
    name: "Raj Patiyal",
    role: "Developer",
  },
  {
    imgSrc: "/assets/icons/Vector.png",
    name: "Manish Chandrakar",
    role: "Developer",
  },
];

export default Team;
