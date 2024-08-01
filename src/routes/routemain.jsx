import { Route, Routes, BrowserRouter } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Homepage from "../components/pages/homepage";
import Features from "../components/pages/features";
import About from "../components/pages/aboutus";
// import RegistrationForm from "../components/pages/forms/registration";
// import LoginForm from "../components/pages/forms/login";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function RouteMain() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={
          <div>
            <h1>404</h1>
            <p>Page not found</p>
          </div>
        } />
        <Route path="/" element={ <Homepage /> } />
        <Route path="/home" element={ <Homepage /> } />
        <Route path="/features" element={ <Features /> } />
        <Route path="/about" element={ <About /> } />
        {/* <Route path="/registration" element={ <RegistrationForm /> } />
        <Route path="/login" element={ <LoginForm /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default RouteMain;
