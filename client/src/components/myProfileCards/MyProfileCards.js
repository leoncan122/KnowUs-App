/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import fetchData from "../../utils/fetchData";
import CollapseCards from "../collapse-cards/CollapseCards";

export default function MyProfileCards({ userId }) {
    const [answers, setAnswer] = useState([]);

    useEffect(async () => {
        const url = `${process.env.REACT_APP_API_URL}profile/cards/${userId}`;
        const data = await fetchData(false, url, "GET");

        setAnswer(data);
    }, []);
    return (
        <div>
            <p>
                Her/Him has <span>{answers.length}</span> answers
            </p>
            {answers.length > 0 ? (
                // eslint-disable-next-line react/no-array-index-key
                answers.map((card, index) => (
                    <CollapseCards
                        posts={card}
                        key={`collapse-card-${index}`}
                    />
                ))
            ) : (
                <h1>You havent answered any questions</h1>
            )}
        </div>
    );
}
