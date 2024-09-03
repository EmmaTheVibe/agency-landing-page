import Home from "./Home";
import Services from "./Services";
import Resources from "./Resources";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Navbar from "./NavBar";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const matches = useMediaQuery("(max-width: 700px)");
  return (
    <div className="main">
      <Navbar matches={matches} />
      <Home />
      <Services matches={matches} />
      <Resources matches={matches} />
      <Testimonials />
      <Gallery matches={matches} />
      <Footer />
    </div>
  );
}

export default App;
