import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import YarnStashNav from "./home/Navbar";
import Auth from "./auth/Auth";
import Home from "./home/StitcherHome";

function App() {
  return (
    <div>
      <Router>
        
{/* Switch will need to go here */}
          <YarnStashNav />
          <Auth />
          <Home />
        
      </Router>
    </div>
  );
}

export default App;
