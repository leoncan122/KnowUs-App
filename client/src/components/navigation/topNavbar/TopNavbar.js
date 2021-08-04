import React, { useContext } from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";
import Search from "../../search/Search";
import { userContext } from "../../../context/userContext";
import Logout from "../../logout/Logout";

export default function TopNavbar() {
    const { userLoged } = useContext(userContext);
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
                    {userLoged ? (
                        <li>
                            <Logout />
                        </li>
                    ) : (
                        <li>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Signup</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}
