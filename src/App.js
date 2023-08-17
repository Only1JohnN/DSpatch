import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Navbar, Footer } from "./components";
import Routes from "./Routes";
import AppContextProvider from "./contexts/AppContext";

import { SignUpDialog } from "./pages/SignUp";
import { ThemeProvider } from "@mui/material";

// Assets
import theme from "./assets/theme";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AppContextProvider>
      <div className='App'>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes location={location} />
          <SignUpDialog />
          <Footer />
        </ThemeProvider>
      </div>
    </AppContextProvider>
  );
}

export default App;
