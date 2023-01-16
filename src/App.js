import { useLocation } from "react-router-dom";

import { Navbar, Footer } from "./components";
import AboutUs from "./pages/AboutUs/AboutUs";
import Routes from "./Routes";

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <Navbar />
      <Routes location={location} />
      <Footer />
    </div>
  );
}

export default App;
