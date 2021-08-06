import React, { useState, useEffect } from "react";
import fetchData from "../../../utils/fetchData";
import "./aside.css";

function Aside() {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    console.log(error, loading);

    useEffect(() => {
        const url = "http://localhost:4000/home";
        async function fetching() {
            try {
                setLoading(false);
                const res = await fetchData(null, url, "GET");
                const rawData = await res.json();

                if (!res.ok) {
                    setError(data.error);
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
            <div>Foto</div>
            <div>Foto</div>
            <div>Foto</div>
            <div>Foto</div>
        </div>
    );
}

export default Aside;
