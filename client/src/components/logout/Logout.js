import React, { useContext } from "react";
import "./Logout.css";
import { userContext } from "../../context/userContext";

const Logout = () => {
    const { setUserLoged } = useContext(userContext);
    return (
        <button type="button" onClick={setUserLoged(null)}>
            Logout
        </button>
    );
};

export default Logout;
