import React, { useContext, useEffect } from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";
import { userContext } from "../../../context/userContext";
import Logout from "../../logout/Logout";
import cookieMonster from "../../../utils/cookieMonster";

export default function TopNavbar() {
    const { isLoged, setIsLoged } = useContext(userContext);

    useEffect(() => {
        const tokenBoolean = cookieMonster("token");
        setIsLoged(tokenBoolean);
    });

    return (
        <nav className="main-nav">
            <div className="logo">
                <h2>
                    <Link to="/">
                        {" "}
                        <span>K</span>now<span>U</span>s
                    </Link>
                </h2>
            </div>

            <div className="menu-link">
                <ul>
                    {isLoged ? (
                        <li>
                            <Logout />
                        </li>
                    ) : (
                        <li className="log-register-btn">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Signup</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}
