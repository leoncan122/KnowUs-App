import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";
import fetchData from "../../../utils/fetchData";
import "./aside.css";
import ProfileCard from "./ProfileCard";

function Aside() {
    const { result } = useContext(SearchContext);
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    // Here result of search or fetchedData
    const users =
        !result.users || result.users.length < 1 ? data : result.users;

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}home/randomuser`;
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
            {error ? (
                <center>{error}</center>
            ) : (
                users &&
                users.map((profile, index) => (
                    <div key={profile.id}>
                        {loading ? (
                            <center>{loading}</center>
                        ) : (
                            <ProfileCard clase={index} data={profile} />
                        )}
                    </div>
                ))
            )}
        </div>
    );
}

export default Aside;
