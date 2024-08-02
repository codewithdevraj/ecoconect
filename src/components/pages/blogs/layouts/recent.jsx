import posts from "../../../../databases/posts.json";
import { Link } from "react-router-dom";

const Recent = () => {
  const recentPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3); // Adjust the number of recent posts to display

  return (
    <div className="blog-section" id="recent">
      <h2>Recent Posts</h2>
      <div className="cards-container" id="recent-container">
        {recentPosts.map((post) => (
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

export default Recent;
