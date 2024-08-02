import news from '../../../../databases/news.json';

const NewsList = () => {
  return (
    <div className="news">
      <h2>Current News</h2>
      <div className="news-list">
        {news.map((newsItem, index) => (
          <div key={index} className="news-card">
            <h3>{newsItem.headline}</h3>
            <p>{newsItem.summary}</p>
            <a href={newsItem.link}>Read More</a>
          </div>
        ))}
      </div>
      <a href="/news" className="loadmore">
        Load more
      </a>
    </div>
  );
};

export default NewsList;