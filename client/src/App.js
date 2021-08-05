import "./App.css";
import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import SingUp from "./pages/authentication/singup/SingUp";
import Login from "./pages/authentication/login/Login";
import TopNavbar from "./components/navigation/topNavbar/TopNavbar";
import BottomNavbar from "./components/navigation/bottomNavbar/BottomNavbar";
import Home from "./components/home/Home";

function App() {
    return (
        <div className="App">
            <Router>
                <TopNavbar />
                <Switch>
                    <Route exact path="/home" component={Home} />

                    <Route path="/login" component={Login} />

                    <Route path="/register" component={SingUp} />
                </Switch>
                <BottomNavbar />
            </Router>
        </div>
    );
}

export default App;
