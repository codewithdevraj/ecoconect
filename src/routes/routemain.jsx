import { Route, Routes, BrowserRouter } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Homepage from "../components/pages/homepage";
import Features from "../components/pages/features";
import About from "../components/pages/aboutus";
import RegistrationForm from "../components/pages/forms/registration";
import LoginForm from "../components/pages/forms/login";
import OtpGen from "../components/pages/forms/otp";
import ChangePassword from "../components/pages/forms/passreset";
import Partners from "../components/pages/partners";
import ResourcePage from "../components/pages/resource-page";
import Community from "../components/pages/community";
import Blogs from "../components/pages/blogs";
import ContactUs from "../components/pages/contactus";
import Page404 from "../components/pages/page404";
import ForumsPage from "../components/pages/forums";
import GroupsPage from "../components/pages/groups";
import EventsPage from "../components/pages/events-page";
import ArticlesPage from "../components/pages/articles";
import AnnouncementsPage from "../components/pages/announcement-page";
import NewsPage from "../components/pages/newspage";
import SdgsPage from "../components/pages/sdg-page";

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
        <Route path="*" element={ <Page404/> } />
        <Route path="/" element={ <Homepage /> } />
        <Route path="/home" element={ <Homepage /> } />
        <Route path="/features" element={ <Features /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/partners" element={<Partners />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/community/forums" element={<ForumsPage />} />
        <Route path="/community/groups" element={<GroupsPage />} />
        <Route path="/community/events" element={<EventsPage />} />
        <Route path="/resources/articles" element={<ArticlesPage />} />
        <Route path="/resources/announcements" element={<AnnouncementsPage />} />
        <Route path="/resources/news" element={<NewsPage />} />
        <Route path="/resources/sdgs" element={<SdgsPage />} />
        
        <Route path="/registration" element={ <RegistrationForm /> } />
        <Route path="/login" element={ <LoginForm /> } />
        <Route path="/resetpasswod" element={ <OtpGen /> } />
        <Route path="/changepassword" element={ <ChangePassword /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteMain;
