import "./Logout.css";
import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { userContext } from "../../context/userContext";

import cookieMonster from "../../utils/cookieMonster";

const Logout = () => {
    const { setUserLoged, setIsLoged } = useContext(userContext);

    const logOut = async () => {
        const deleteCookie = await fetch("http://localhost:4000/logout", {
            method: "get",
            credentials: "include",
        });
        if (deleteCookie.ok) {
            setUserLoged(null);
            const tokenBoolean = cookieMonster("token");
            setIsLoged(tokenBoolean);
        }
    };

    return (
        <button type="button" className="logout-btn" onClick={() => logOut()}>
            Log out
        </button>
    );
};

export default Logout;
