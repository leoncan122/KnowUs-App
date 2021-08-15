import "../request/request.css";
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import fetchData from "../../utils/fetchData";

// import MessagePanel from "../request/components/panel/MessagePanel";
import Chat from "./Chat";

function MessagesInbox() {
    // const [msgSelected, setMsgSelected] = useState(null);
    // const [data, setData] = useState(null);
    const [textboardState, setTextboardState] = useState("unable");
    useEffect(() => {
        async function fetching() {
            const url = "http://localhost:4000/messages/inbox";
            const rawData = await fetchData(null, url, "GET");
            console.log(rawData);
            // if (rawData.isSuccesful) {
            //     setData(rawData.questions);
            // }
        }

        if (textboardState === "unable") {
            fetching();
        }
    }, [textboardState]);

    // allows access to messages displayer, and see the message when click on conversation,
    // const useRequest = (conversation) => {
    //     setTextboardState("active");
    //     setMsgSelected(conversation);
    // };

    return (
        <div className="requestPage">
            <div className="content">
                <Route path="/user">
                    <Chat />
                </Route>
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

export default MessagesInbox;
