import { Link } from "react-router-dom";
import posts from "../../../../databases/posts.json";

const Popular = () => {
  const popularPosts = posts.filter((post) => post.popular);

  return (
    <div className="blog-section" id="featured">
      <h2>Popular Posts</h2>
      <div className="cards-container" id="featured-container">
        {popularPosts.slice(0, 6).map((post) => (
          <Link
            to={{
              pathname: `/blogs/${post.id}`,
              state: { post: post },
            }}
          >
            <div className="card" key={post.id}>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.date}</p>
              <p>{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;
