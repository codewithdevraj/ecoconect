import './style.css';
import Featured from './layouts/featured';
import BlogHero from './layouts/hero';
import Recent from './layouts/recent';
import Popular from './layouts/popular';
import Category from './layouts/category';

const BlogContentSetup = () => {
  return (
    <section class="blog-content">
      <Recent />
      <Featured />
      <Popular />
      <Category />

      {/* <div class="blog-section" id="featured">
        <h2>Featured Posts</h2>
        <div class="cards-container" id="featured-container"></div>
      </div>

      <div class="blog-section" id="recent">
        <h2>Recent Posts</h2>
        <div class="cards-container" id="recent-container"></div>
      </div>

      <div class="blog-section" id="popular">
        <h2>Popular Posts</h2>
        <div class="cards-container" id="popular-container"></div>
      </div>

      <div class="blog-section" id="categories">
        <h2>Categories</h2>
        <div id="category-buttons"></div>
        <select id="category-select" class="hidden"></select>
        <div class="cards-container" id="category-container"></div>
      </div> */}

    </section>
  );
};

const Blogs = () => {
  return (
    <>
      <BlogHero />
      <BlogContentSetup />
    </>
  );
}

export default Blogs;