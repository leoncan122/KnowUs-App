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
        async function fetching() {
            const url = "http://localhost:4000/user/question";
            const rawData = await fetchData(null, url, "GET");
            if (rawData.isSuccesful) {
                setData(rawData.questions);
            }
        }

        if (textboardState === "unable") {
            fetching();
        }
    }, [textboardState]);

    // allows access to messages displayer, and see the message when click on conversation,
    const useRequest = (conversation) => {
        setTextboardState("active");
        setMsgSelected(conversation);
    };

    return (
        <div className="requestPage">
            <div className="header">
                {textboardState === "active" && (
                    <button
                        type="button"
                        onClick={() => {
                            setTextboardState("unable");
                        }}
                    >
                        back
                    </button>
                )}
                {textboardState === "active" ? (
                    <p>{msgSelected.sender}</p>
                ) : (
                    <p>Questions</p>
                )}
            </div>
            <div className="content">
                {textboardState === "active" ? (
                    <MessageDisplayer
                        className="textboard"
                        data={msgSelected}
                    />
                ) : (
                    <MessagePanel fn={useRequest} data={data} />
                )}
            </div>
        </div>
    );
}

export default Request;
