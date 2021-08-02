import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Route path="/user/questions" component={Request} />;
        </BrowserRouter>
    );
}

export default App;
