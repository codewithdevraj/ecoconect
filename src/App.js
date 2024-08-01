import Navbar from "./components/common/navbar";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import RouteMain from "./routes/routemain";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <>
        <RouteMain />
      </>
      <Footer />
    </>
    
  );
}

export default App;
