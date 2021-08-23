import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import "./chat.css";

function MessagesInbox() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetching() {
            const url = "http://localhost:4000/message/inbox";
            const rawData = await fetchData(null, url, "GET");
            if (rawData.messages) {
                setData(rawData.messages);
            }
        }

        fetching();
    }, []);

    return (
        <div className="question-content">
            <h4>
                Messages <span>{data ? data.length : 0}</span>
            </h4>

            <div className="question-panel">
                {data ? (
                    data.map((msg) => (
                        <Link
                            className="link-question"
                            to={{
                                pathname: `/messages/${msg.sender_id}`,
                                state: msg,
                            }}
                        >
                            <button
                                key={msg.id}
                                className="question-btn"
                                type="button"
                            >
                                {msg.sender}
                            </button>
                        </Link>
                    ))
                ) : (
                    <center>You dont have any messages already</center>
                )}
            </div>
        </div>
    );
}

export default MessagesInbox;
