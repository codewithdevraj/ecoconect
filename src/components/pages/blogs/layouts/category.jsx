import { Link } from "react-router-dom";
import posts from "../../../../databases/posts.json";
import { useState } from "react";

const categories = [
  "All",
  "Technology",
  "Green",
  "Innovation",
  "Agriculture",
  "Sustainability",
  "Farming",
  "Energy",
  "Renewable",
  "Conservation",
  "Water",
  "Climate",
  "Mitigation",
  "Environment",
  "Gardening",
  "Urban",
  "Transportation",
  "Eco-Friendly",
  "Lifestyle",
  "Zero Waste",
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) =>
          post.tags.includes(selectedCategory.toLowerCase())
        );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="blog-section" id="categories">
      <h2>Categories</h2>
      <div id="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="cards-container" id="category-container">
        {filteredPosts.map((post) => (
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

export default Category;