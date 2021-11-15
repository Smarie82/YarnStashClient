import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import YarnStashNav from "./home/Navbar";
import Auth from "./auth/Auth";
import Home from "./home/Home";
import Footer from "./home/Footer";
import { useEffect, useState } from "react";
import PatternIndex from "./PatternStash/PatternIndex";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <Home token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div>
      <Router> 
      <Switch>
          <YarnStashNav />
        <Route exact path="/home">
        <Home />
        </Route>
        <Route path="/patternindex" exact component={PatternIndex} />
      </Switch>
        {protectedViews()}
        </Router>

        <Footer />
    </div>
  );
}

export default App;
