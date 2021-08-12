import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import SingUp from "./pages/authentication/singup/SingUp";
import Login from "./pages/authentication/login/Login";
import TopNavbar from "./components/navigation/topNavbar/TopNavbar";
import BottomNavbar from "./components/navigation/bottomNavbar/BottomNavbar";
import Home from "./components/home/Home";
import ProfilePrueba from "./components/asideUserInfo/ProfilePrueba";
import EditProfile from "./pages/editProfile/EditProfile";
// import { userContext } from "./context/userContext";

function App() {
    return (
        <div className="App">
            <TopNavbar />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/login" component={Login} />

                <Route path="/register" component={SingUp} />

                <Route exact path="/profile" component={ProfilePrueba} />

                <Route path="/profile/edit" component={EditProfile} />
            </Switch>
            <BottomNavbar />
        </div>
    );
}

export default App;
