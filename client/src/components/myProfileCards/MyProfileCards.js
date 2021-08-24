import React, { useState, useEffect } from "react";
import fetchData from "../../utils/fetchData";
import CollapseCards from "../collapse-cards/CollapseCards";

export default function MyProfileCards({ userId }) {
    const [answers, setAnswer] = useState([]);

    useEffect(async () => {
        const url = `http://localhost:4000/profile/cards/${userId}`;
        const data = await fetchData(false, url, "GET");

        setAnswer(data);
    }, []);
    return (
        <div>
            <p>
                Her/Him has <span>{answers.length}</span> answers
            </p>
            {answers.length > 0 ? (
                answers.map((card) => (
                    <>
                        <CollapseCards posts={card} />
                    </>
                ))
            ) : (
                <h1>You havent answered any questions</h1>
            )}
        </div>
    );
}
