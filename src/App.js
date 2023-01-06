import { Navbar, Footer } from "./components";
import { LandingPage } from "./pages";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Terms from "./pages/Terms/Terms";

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <LandingPage /> */}
      
      <div>
        <Router>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/termsandcondition" element={ <Terms /> } />
      </Routes>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
