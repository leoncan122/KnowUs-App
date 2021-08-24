import "./Logout.css";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { userContext } from "../../context/userContext";

const Logout = () => {
    const { setUserLoged } = useContext(userContext);
    const history = useHistory();

    const logOut = () => {
        setUserLoged(false);
        sessionStorage.clear();
        history.push("/");
    };

    return (
        <button type="button" className="logout-btn" onClick={logOut}>
            Logout
        </button>
    );
};

export default Logout;
