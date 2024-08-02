import './style.css';
import ResouceHero from './layouts/hero';
import Articles from './layouts/article';
import AnnouncementList from './layouts/announcement';
import EventList from './layouts/events';
import NewsList from './layouts/news';
import SDGList from './layouts/sdgs';

const ResourceContent = () => {
  return (
    <section className="resource-content">
      <div className="articles-news">

          <Articles/>

          <NewsList/>
      </div>
      <SDGList />
      <AnnouncementList />
      <EventList />
    </section>
  )
}

const ResourcePage = () => {
  return (
    <>
      <ResouceHero />
      <ResourceContent />
    </>
  )
}

export default ResourcePage;