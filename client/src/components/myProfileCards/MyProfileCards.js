import React, { useState, useEffect } from "react";
import fetchData from "../../utils/fetchData";

export default function MyProfileCards() {
    const [answer, setAnswer] = useState("");

    useEffect(async () => {
        const url = "http://localhost:4000/profile/cards";
        const data = await fetchData(false, url, "GET");
        console.log(data[0]);
        if (data[0]) {
            setAnswer(data[0].text);
        } else {
            setAnswer("You haven't answered any questions");
        }
    }, []);
    return (
        <div>
            <h1>{answer}</h1>
        </div>
    );
}
