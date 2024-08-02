import image from '../../../../assets/images/vision1.png';
const PartnerCard = ({ partner }) => {
  return (
    <div className="partner-card">
      <img src={image} alt={partner.name} />
      <h3>{partner.name}</h3>
      <p>{partner.description}</p>
      <h4>Target:</h4>
      <p>{partner.target}</p>
      <h4>Requirements:</h4>
      <ul>
        {partner.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
      <h4>Contact:</h4>
      <p>Email: <a href={`mailto:${partner.contact.email}`}>{partner.contact.email}</a></p>
      <p>Phone: {partner.contact.phone}</p>
    </div>
  );
};


const partners = [
  {
    name: "Green Earth Initiative",
    logo: "/assets/images/partner1.png",
    description:
      "A global organization focused on reforestation and reducing carbon footprints.",
    target: "Planting 1 million trees by 2030",
    requirements: [
      "Partnerships with local communities",
      "Funding for saplings and maintenance",
      "Volunteer support for planting and monitoring",
    ],
    contact: {
      email: "info@greenearth.org",
      phone: "+123 456 7890",
    },
  },
  {
    name: "Clean Water Alliance",
    logo: "/assets/images/partner2.png",
    description:
      "Ensuring access to clean and safe drinking water in underserved regions.",
    target: "Provide clean water to 500,000 people by 2025",
    requirements: [
      "Collaborations with local governments",
      "Technology for water purification",
      "Training for local water management",
    ],
    contact: {
      email: "contact@cleanwater.org",
      phone: "+123 456 7891",
    },
  },
  {
    name: "Solar Future",
    logo: "/assets/images/partner3.png",
    description:
      "Promoting the use of solar energy to reduce dependence on fossil fuels.",
    target: "Install solar panels in 10,000 homes by 2026",
    requirements: [
      "Investment in solar technology",
      "Skilled labor for installation",
      "Public awareness campaigns",
    ],
    contact: {
      email: "support@solarfuture.org",
      phone: "+123 456 7892",
    },
  },
  {
    name: "Ocean Cleanup Project",
    logo: "/assets/images/partner4.png",
    description:
      "Aiming to remove plastic and other pollutants from the world's oceans.",
    target: "Remove 5 million tons of plastic by 2030",
    requirements: [
      "Advanced cleanup technology",
      "Logistical support for ocean operations",
      "Volunteers for beach cleanups",
    ],
    contact: {
      email: "help@oceancleanup.org",
      phone: "+123 456 7893",
    },
  },
  {
    name: "Sustainable Agriculture Network",
    logo: "/assets/images/partner5.png",
    description:
      "Working towards sustainable farming practices and food security.",
    target: "Support 1,000 farmers with sustainable practices by 2024",
    requirements: [
      "Training programs for farmers",
      "Access to sustainable farming resources",
      "Research and development in sustainable agriculture",
    ],
    contact: {
      email: "info@sustainableagriculture.org",
      phone: "+123 456 7894",
    },
  },
];

const CurrentPartners = () => {
  return (
    <section className="current-partners">
      <h2>Current Partners</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <PartnerCard key={index} partner={partner} />
        ))}
      </div>
    </section>
  );
};

export default CurrentPartners;
