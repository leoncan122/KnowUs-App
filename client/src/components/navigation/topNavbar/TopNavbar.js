import React from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";
import Search from "../../search/Search";

export default function TopNavbar() {
    return (
        <nav className="main-nav">
            <div className="logo">
                <h2>
                    <Link to="/home">
                        {" "}
                        <span>K</span>now<span>U</span>s
                    </Link>
                </h2>
            </div>

            <div className="search-box">
                <Search />
            </div>

            <div className="menu-link">
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
