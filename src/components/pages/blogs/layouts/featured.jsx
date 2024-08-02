import posts from "../../../../databases/posts.json";

const Featured = () => {
  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <div className="blog-section" id="featured">
      <h2>Featured Posts</h2>
      <div className="cards-container" id="featured-container">
        {featuredPosts
          .slice(0,6)
          .map((post) => (
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

export default Featured;
