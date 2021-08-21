import "./components/panel/messagePanel.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchData from "../../utils/fetchData";

function Request() {
    // const [msgSelected, setMsgSelected] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetching() {
            const url = "http://localhost:4000/user/question";
            const rawData = await fetchData(null, url, "GET");
            console.log(rawData);
            if (rawData.isSuccesful) {
                setData(rawData.questions);
            }
        }
        fetching();
    }, []);

    return (
        <div className="panel">
            {data ? (
                data.map((post) => (
                    <Link
                        to={{
                            pathname: `/question/${post.id}`,
                            state: post,
                        }}
                    >
                        <button key={post.id} type="button">
                            {post.text || post.sender}
                        </button>
                    </Link>
                ))
            ) : (
                <center>You dont have any messages/questions already</center>
            )}
        </div>
    );
}

export default Request;
