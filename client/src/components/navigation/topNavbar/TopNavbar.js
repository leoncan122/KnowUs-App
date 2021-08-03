import React from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";

export default function TopNavbar() {
    return (
        <nav className="main-nav">
            <div className="logo">
                <h2>
                    <span>K</span>now<span>U</span>s
                </h2>
            </div>

            <div className="search-box">
                <form>
                    <input
                        type="text"
                        placeholder="Search something"
                        name="s"
                    />
                    <button type="submit">Search</button>
                </form>
            </div>

            <div className="menu-link">
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
