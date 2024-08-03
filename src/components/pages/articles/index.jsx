import articles from "../../../databases/articles.json";
import './style.css';

const ArticlesPage = () => {
  return (
    <div className="articles-section">
      <h2>Articles</h2>
      <div className="articles-container">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.imgSrc} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
