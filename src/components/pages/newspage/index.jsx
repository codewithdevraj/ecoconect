import newsList from "../../../databases/news.json";
import "./style.css"; 
import {Link} from 'react-router-dom'

const NewsPage = () => {
  return (
    <div className="newss-section">
      <h2>NewsList</h2>
      <div className="newss-container">
        {newsList.map((news) => (
          <Link
            to={`/resources/news/${news.id}`} // Ensure you have the route for the news detail page
            style={{ textDecoration: "none" }}
          >
            <div key={news.id} className="news-card">
              <h3>{news.headline}</h3>
              <p>{news.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
