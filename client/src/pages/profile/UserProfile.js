import React, { useEffect, useState } from "react";
import fetchData from "../../utils/fetchData";
import "./userProfile.css";

const userProfile = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const url = `http://localhost:4000/home/user/4`;
        async function fetching() {
            const rawData = await fetchData(null, url, "GET");
            if (rawData.error) {
                setError(rawData.error);
            }
            setData(rawData);
        }
        fetching();
    }, []);

    console.log(data, error);
    return (
        <div className="main-content">
            <div className="info-profile">
                <div>info</div>
                <div>photo</div>
                <div>send msg or public ask</div>
            </div>
            <div className="publications">publications</div>
        </div>
    );
};

export default userProfile;
