import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Navbar, Footer } from "./components";
import Routes from "./Routes";
import AppContextProvider from "./contexts/AppContext";

import { SignUpDialog } from "./pages/SignUp";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AppContextProvider>
      <div className='App'>
        <Navbar />
        <Routes location={location} />
        <SignUpDialog />
        <Footer />
      </div>
    </AppContextProvider>
  );
}

export default App;
