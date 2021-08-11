import React from "react";
import Search from "../../search/Search";
import "./BottomNavbar.css";

const BottomNavbar = () => (
    <nav className="footer-navbar">
        <div className="search-boxx">
            <Search />
        </div>
    </nav>
);

export default BottomNavbar;
