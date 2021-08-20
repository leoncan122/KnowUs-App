import "./request.css";
import React, { useState, useEffect } from "react";
import fetchData from "../../utils/fetchData";

import MessagePanel from "./components/panel/MessagePanel";
import MessageDisplayer from "./components/textboard/MessageDisplayer";

function Request() {
    const [msgSelected, setMsgSelected] = useState(null);
    const [data, setData] = useState(null);
    const [textboardState, setTextboardState] = useState(false);

    useEffect(() => {
        async function fetching() {
            const url = "http://localhost:4000/user/question";
            const rawData = await fetchData(null, url, "GET");
            console.log(rawData);
            if (rawData.isSuccesful) {
                setData(rawData.questions);
            }
        }
        if (!textboardState) {
            fetching();
        }
    }, [textboardState]);

    // allows access to messages displayer, and see the message when click on conversation,
    const useRequest = (conversation) => {
        setTextboardState(true);
        setMsgSelected(conversation);
    };

    return (
        <div className="requestPage">
            <div className="header">
                {textboardState && (
                    <button
                        type="button"
                        onClick={() => {
                            window.location.reload();
                            setTextboardState(false);
                        }}
                    >
                        back
                    </button>
                )}
                {textboardState ? (
                    <p>{msgSelected.sender}</p>
                ) : (
                    <p>Questions</p>
                )}
            </div>
            <div className="content">
                {textboardState ? (
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
