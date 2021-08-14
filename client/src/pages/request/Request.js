import "./request.css";
import React, { useState, useEffect } from "react";
// import { Route } from "react-router-dom";
import fetchData from "../../utils/fetchData";

import MessagePanel from "./components/panel/MessagePanel";
import MessageDisplayer from "./components/textboard/MessageDisplayer";

function Request() {
    const [msgSelected, setMsgSelected] = useState(null);
    const [data, setData] = useState(null);
    const [textboardState, setTextboardState] = useState("unable");
    useEffect(() => {
        console.log("fetching once again");
        const url = "http://localhost:4000/user/question";
        async function fetching() {
            const rawData = await fetchData(null, url, "GET");

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
