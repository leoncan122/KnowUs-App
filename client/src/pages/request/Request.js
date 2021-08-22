import "./request.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchData from "../../utils/fetchData";

function Request() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetching() {
            const url = "http://localhost:4000/user/question";
            const rawData = await fetchData(null, url, "GET");
            if (rawData.isSuccesful) {
                setData(rawData.questions);
            }
        }
        fetching();
    }, []);

    return (
        <div className="question-content">
            <h4>
                Questions <span>{data ? data.length : 0}</span>
            </h4>
            <div className="question-panel">
                {data ? (
                    data.map((post) => (
                        <Link
                            className="link-question"
                            to={{
                                pathname: `/question/${post.questionid}`,
                                state: post,
                            }}
                        >
                            <button
                                key={post.questionId}
                                className="question-btn"
                                type="button"
                            >
                                {post.title}
                            </button>
                        </Link>
                    ))
                ) : (
                    <center>
                        You dont have any messages/questions already
                    </center>
                )}
            </div>
        </div>
    );
}

export default Request;
