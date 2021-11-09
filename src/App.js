import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import YarnStashNav from "./home/Navbar";
import Auth from "./auth/Auth";
import Home from "./home/StitcherHome";
import Header from "./home/Header";
import Login from "./auth/Login";
import { Component, useEffect, useState } from "react";



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
    return sessionToken === localStorage.getItem('token') ? ( <Home token={sessionToken}/>
      ) : (
      <Auth updateToken={updateToken}/>)
  }
  
  return (
    <div>
      <Router>
          <YarnStashNav  />
        
        {protectedViews()}
      </Router>
     

    </div>
  );
}

export default App;