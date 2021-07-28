import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingUp from "./pages/SingUp";
import Login from "./pages/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <h1>Home</h1>
                    </Route>

                    <Route path="/register">
                        <SingUp />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
