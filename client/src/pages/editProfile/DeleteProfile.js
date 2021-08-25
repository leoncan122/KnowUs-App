import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import { userContext } from "../../context/userContext";

export default function DeleteProfile() {
    const { setUserLoged } = useContext(userContext);

    const history = useHistory();
    const url = "http://localhost:4000/profile/delete";
    const whenClick = async () => {
        fetchData(false, url, "DELETE");

        setUserLoged(false);
        sessionStorage.clear();
        history.push("/");
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
