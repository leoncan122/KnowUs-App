import "./Logout.css";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { userContext } from "../../context/userContext";

import cookieMonster from "../../utils/cookieMonster";

const Logout = () => {
    const { setUserLoged, setIsLoged } = useContext(userContext);
    const history = useHistory();

    const logOut = async () => {
        const deleteCookie = await fetch(
            `${process.env.REACT_APP_API_URL}logout`,
            {
                method: "get",
                credentials: "include",
            }
        );
        if (deleteCookie.ok) {
            setUserLoged(null);
            const tokenBoolean = cookieMonster("token");
            setIsLoged(tokenBoolean);
            history.push("/");
        }
    };

    return (
        <button type="button" className="logout-btn" onClick={logOut}>
            Logout
        </button>
    );
};

export default Logout;
