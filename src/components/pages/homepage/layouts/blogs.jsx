import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <h2>Latest News / Blogs</h2>
      <div className="blog-wrap">
        <div className="blogcard" id="blogcard1">
          <h3>Innovative Partnerships Driving Sustainable Development</h3>
          <Link to="/blog/1">Read more</Link>
        </div>
        <div className="blogcard" id="blogcard2">
          <h3>Case Study: Successful Collaboration for SDG 17</h3>
          <Link to="/blog/2">Read more</Link>
        </div>
        <div className="blogcard" id="blogcard3">
          <h3>Case Study: Successful Collaboration for SDG 17</h3>
          <Link to="/blog/3">Read more</Link>
        </div>
        <div className="blogcard" id="blogcard4">
          <h3>Innovative Partnerships Driving Sustainable Development</h3>
          <Link to="/blog/4">Read more</Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
