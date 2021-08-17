import React, { useState, useEffect } from "react";
import fetchData from "../../utils/fetchData";
import CollapseCards from "../collapse-cards/CollapseCards";

export default function MyProfileCards() {
    const [answers, setAnswer] = useState([]);

    useEffect(async () => {
        const url = "http://localhost:4000/profile/cards";
        const data = await fetchData(false, url, "GET");
        if (data) {
            setAnswer(data);
        } else {
            setAnswer("You haven't answered any questions");
        }
        console.log(answers);
    }, []);
    return (
        <div>
            {answers && answers.map((card) => <CollapseCards posts={card} />)}
        </div>
    );
}
