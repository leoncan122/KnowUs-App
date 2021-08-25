import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import { userContext } from "../../context/userContext";

import cookieMonster from "../../utils/cookieMonster";

export default function DeleteProfile() {
    const { setUserLoged, setIsLoged } = useContext(userContext);

    const history = useHistory();
    const url = "http://localhost:4000/profile/delete";
    const whenClick = async () => {
        fetchData(false, url, "DELETE");

        const deleteCookie = await fetch("http://localhost:4000/logout", {
            method: "get",
            credentials: "include",
        });
        if (deleteCookie.ok) {
            setUserLoged(null);
            const tokenBoolean = cookieMonster("token");
            setIsLoged(tokenBoolean);
            history.push("/");
        }
    };
    return (
        <div>
            <button
                type="button"
                className="btn-delelete-profile"
                onClick={whenClick}
            >
                Delete Account
            </button>
        </div>
    );
}
