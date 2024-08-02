import './style.css';

const Page404 = () => {
  return (
    <div className="container404">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go Home</a>
      <div className="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="#ffa500" />
          <path
            d="M32 40a8 8 0 110-16 8 8 0 010 16zm0 4a12 12 0 100-24 12 12 0 000 24z"
            fill="#07050e"
          />
          <circle cx="32" cy="32" r="6" fill="#ffa500" />
        </svg>
      </div>
    </div>
  );
}

export default Page404;