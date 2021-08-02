import React from "react";
import "./BottomNavbar.css";

const BottomNavbar = () => (
    <nav className="footer-navbar">
        <div className="search-boxx">
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    className="input-field"
                />
                <button type="submit" className="submit-btn">
                    Search
                </button>
            </form>
        </div>
    </nav>
);

export default BottomNavbar;
