import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import SingUp from "./pages/authentication/singup/SingUp";
import Login from "./pages/authentication/login/Login";
import TopNavbar from "./components/navigation/topNavbar/TopNavbar";
import BottomNavbar from "./components/navigation/bottomNavbar/BottomNavbar";
import Home from "./pages/home/Home";
import UserProfile from "./pages/profile/UserProfile";
// import { userContext } from "./context/userContext";

function App() {
    return (
        <div className="App">
            <TopNavbar />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/login" component={Login} />

                <Route path="/register" component={SingUp} />

                <Route path="/user/profile/:id" component={UserProfile} />
            </Switch>
            <BottomNavbar />
        </div>
    );
}

export default App;
