import "./request.css";
import React, { useState, useEffect } from "react";
// import { Route } from "react-router-dom";
import fetchData from "../../utils/fetchData";

import MessagePanel from "./components/MessagePanel";
import MessageDisplayer from "./components/MessageDisplayer";

function Request() {
    const [msgSelected, setMsgSelected] = useState(null);
    const [data, setData] = useState(null);
    const [textboardState, setTextboardState] = useState("unable");

    useEffect(() => {
        const url = "http://localhost:4000/user/question";
        async function fetching() {
            const rawData = await fetchData(null, url, "GET");
            console.log(rawData);

            if (rawData.isSuccesful) {
                setData(rawData.questions);
            }
        }
        fetching();
    }, []);

    // allows access to messages displayer, and see the message when click on conversation,

    const useRequest = (conversation) => {
        setTextboardState("active");
        setMsgSelected(conversation);
    };

    return (
        <div className="requestPage">
            <div className="content">
                {textboardState === "active" ? (
                    <MessageDisplayer
                        className="textboard"
                        data={msgSelected}
                        url="http://localhost:4000/user/answer"
                    />
                ) : (
                    <MessagePanel
                        className="panel"
                        fn={useRequest}
                        data={data}
                    />
                )}
            </div>

            <div className="footer">
                <button
                    type="button"
                    onClick={() => {
                        setTextboardState("unable");
                    }}
                >
                    back
                </button>
            </div>
        </div>
    );
}

export default Request;
