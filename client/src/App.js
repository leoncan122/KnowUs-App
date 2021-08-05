import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingUp from "./pages/authentication/singup/SingUp";
import Login from "./pages/authentication/login/Login";
import TopNavbar from "./components/navigation/topNavbar/TopNavbar";
// import { userContext } from "./context/userContext";
import BottomNavbar from "./components/navigation/bottomNavbar/BottomNavbar";
import Home from "./components/home/Home";

function App() {
    // const { userLoged } = useContext(userContext);

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
