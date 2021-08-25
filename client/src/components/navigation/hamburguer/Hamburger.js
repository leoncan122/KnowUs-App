import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../logout/Logout";
import "./hamburguer.css";

const Hamburger = () => (
    <div className="burger">
        <Link to="/my-profile">
            <button type="button">profile</button>
        </Link>
        <Link to="/question">
            <button type="button">questions</button>
        </Link>
        <Link to="/messages">
            <button type="button">messages</button>
        </Link>
        <Link to="/profile/edit">
            <button type="button">settings</button>
        </Link>
        <Logout />
    </div>
);
export default Hamburger;
