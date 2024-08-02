import articles from '../../../../databases/articles.json'

const Articles = () => {
  return (
    <div className="articles">
      <h2>Articles</h2>
      <div className="article-list">
        {articles
          .slice(0, 4)
          .map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.imgSrc} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.link}>Read More</a>
          </div>
        ))}
      </div>
      <a href="/articles" className="loadmore">
        Load more
      </a>
    </div>
  );
};

export default Articles;
