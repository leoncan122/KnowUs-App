import "./Logout.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../context/userContext";

const Logout = () => {
    const { setUserLoged } = useContext(userContext);
    return (
        <Link to="/login">
            <button
                type="button"
                className="logout-btn"
                onClick={() => setUserLoged(null)}
            >
                Log out
            </button>
        </Link>
    );
};

export default Logout;
