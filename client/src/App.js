import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingUp from "./pages/authentication/singup/SingUp";
import Login from "./pages/authentication/login/Login";
import TopNavbar from "./components/navigation/topNavbar/TopNavbar";
import { userContext } from "./context/userContext";
import BottomNavbar from "./components/navigation/bottomNavbar/BottomNavbar";
>>>>>>> 581a76fc96d579c86d3cfa2024fde47cb6877348

function App() {
    const { userLoged } = useContext(userContext);

    return (
        <div className="App">
            <Router>
                <TopNavbar />
                <BottomNavbar />
                <Switch>
                    {userLoged && (
                        <Route exact path="/home">
                            <h1>Home {userLoged.username}</h1>
                        </Route>
                    )}

                    <Route path="/login" component={Login} />

                    <Route path="/register" component={SingUp} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
