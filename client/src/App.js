import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingUp from "./pages/SingUp";
import Login from "./pages/Login";
import TopNavbar from "./components/navigation/topNavbar/TopNavbar";
import BottomNavbar from "./components/navigation/bottomNavbar/BottomNavbar";
import Home from "./components/home/Home";

function App() {
    return (
        <div className="App">
            <Router>
                <TopNavbar />
                <BottomNavbar />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/register" component={SingUp} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
