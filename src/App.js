import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/auth/PrivateRoute";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PlantList from "./components/plants/PlantList";

import './App.css';

// Logout
const onClick = () => {
  window.localStorage.removeItem("token");
}

// Landing
function App() {
  
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <span className="nav-bar-brand">Water Your Plants</span>
          <a href="/signup" onClick={onClick}>sign up</a>
          <a href="#" onClick={onClick}>logout</a>
        </nav>

        <div className="container">
          <div className="home-row">
            <Switch>
              <PrivateRoute path="/home" component={PlantList} />
              <Route path="/signup">
                <Register/>
              </Route>
              <Route exactPath="/">
                <Login />
              </Route>
            </Switch>
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
