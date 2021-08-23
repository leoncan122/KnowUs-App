import React, { useState } from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";
import Hamburger from "../hamburguer/Hamburger";

export default function TopNavbar() {
    const { cookie } = document;
    const [menuActive, setMenuActive] = useState(false);

    function handleMenu() {
        setMenuActive(!menuActive);
    }

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
                    {cookie ? (
                        <li>
                            <button
                                className="options"
                                type="button"
                                onClick={handleMenu}
                            >
                                Options
                            </button>
                        </li>
                    ) : (
                        <li className="log-register-btn">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Signup</Link>
                        </li>
                    )}
                </ul>
            </div>
            {cookie && menuActive && <Hamburger />}
        </nav>
    );
}
