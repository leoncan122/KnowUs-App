import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingUp from "./pages/authentication/singup/SingUp";
import Login from "./pages/authentication/login/Login";
import TopNavbar from "./components/navigation/topNavbar/TopNavbar";

function App() {
    return (
        <div className="App">
            <Router>
                <TopNavbar />
                <Switch>
                    <Route exact path="/home">
                        <h1>Home</h1>
                    </Route>
                    <Route path="/register" component={SingUp} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
