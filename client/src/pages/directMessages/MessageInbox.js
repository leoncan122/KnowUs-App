import "./inbox.css";
import React, { useState, useEffect } from "react";
// import { Route } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import cookieMonster from "../../utils/cookieMonster";

import Chat from "./Chat";
import MessagePanel from "../request/components/panel/MessagePanel";

function MessagesInbox() {
    const [msgSelected, setMsgSelected] = useState(null);
    const [data, setData] = useState(null);
    const [textboardState, setTextboardState] = useState("unable");

    const userId = cookieMonster("userId");
    useEffect(() => {
        async function fetching() {
            const url = "http://localhost:4000/message/inbox";
            const rawData = await fetchData(null, url, "GET");

            if (rawData.messages) {
                setData(rawData.messages);
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
        <div className="inbox-page">
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
                    <p>Messages</p>
                )}
            </div>
            <div className="content">
                {textboardState === "active" ? (
                    <Chat to={msgSelected.sender_id} from={userId} />
                ) : (
                    <MessagePanel fn={useRequest} data={data} />
                )}
            </div>
        </div>
    );
}

export default MessagesInbox;
