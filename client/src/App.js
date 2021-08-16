import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import SingUp from "./pages/authentication/singup/SingUp";
import Login from "./pages/authentication/login/Login";
import TopNavbar from "./components/navigation/topNavbar/TopNavbar";
import Home from "./pages/home/Home";
import UserProfile from "./pages/profile/UserProfile";
import EditProfile from "./pages/editProfile/EditProfile";
import { SearchProvider } from "./context/SearchContext";
import MakeQuestion from "./components/question/MakeQuestion";
import Request from "./pages/request/Request";
import MessagesInbox from "./pages/directMessages/MessageInbox";
// import { userContext } from "./context/userContext";

function App() {
    return (
        <div className="App">
            <SearchProvider>
                <TopNavbar />
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route path="/login" component={Login} />

                    <Route path="/register" component={SingUp} />

                    <Route exact path="/user/:id" component={UserProfile} />

                    <Route path="/user/:id/question" component={MakeQuestion} />

                    <Route path="/question" component={Request} />

                    <Route path="/messages" component={MessagesInbox} />

                    <Route path="/profile/edit" component={EditProfile} />
                </Switch>
            </SearchProvider>
        </div>
    );
}

export default App;
