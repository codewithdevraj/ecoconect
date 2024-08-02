import {Link} from 'react-router-dom'
const Opportunity = () => {
  return (
    <section className="partnership-opportunities">
      <h2>Partnership Opportunities</h2>
      <p>
        Learn how to become a partner and the benefits of joining our network.
      </p>
      <button>
        <Link
          to="/user/partner"
        >
          Become a Partner
        </Link>
      </button>
    </section>
  );
}

export default Opportunity;