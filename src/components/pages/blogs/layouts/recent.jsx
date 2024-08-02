import posts from "../../../../databases/posts.json";

const Recent = () => {
  const recentPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3); // Adjust the number of recent posts to display

  return (
    <div className="blog-section" id="recent">
      <h2>Recent Posts</h2>
      <div className="cards-container" id="recent-container">
        {recentPosts.map((post) => (
          <div className="card" key={post.id}>
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;
