import React, { useState, useEffect } from "react";
import fetchData from "../../../utils/fetchData";
import "./aside.css";
import ProfileCard from "./ProfileCard";

function Aside() {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    console.log(error, loading);

    useEffect(() => {
        const url = "http://localhost:4000/home/randomuser";
        async function fetching() {
            try {
                setLoading(false);
                const rawData = await fetchData(null, url, "GET");

                if (rawData.error) {
                    setError(rawData.error);
                }
                setData(rawData);
            } catch (err) {
                setError("The comunication failed, try again later");
            }
        }
        fetching();
    }, []);
    return (
        <div className="aside">
            {data &&
                [data].map((profile) => (
                    <div>
                        <ProfileCard data={profile} />
                    </div>
                ))}
        </div>
    );
}

export default Aside;
