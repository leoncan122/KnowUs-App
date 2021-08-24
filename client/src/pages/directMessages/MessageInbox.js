<<<<<<< HEAD
import "./inbox.css";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Route } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import Chat from "./Chat";
import MessagePanel from "../request/components/panel/MessagePanel";
import { userContext } from "../../context/userContext";
=======
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import "./chat.css";
>>>>>>> dev-leon

function MessagesInbox() {
    const [data, setData] = useState(null);
<<<<<<< HEAD
    const [textboardState, setTextboardState] = useState("unable");
    const {userLoged} = useContext(userContext)

    // ids to start a conversation
    const { id } = useParams();
    const {userId} = userLoged
=======
>>>>>>> dev-leon

    useEffect(() => {
        async function fetching() {
            const url = `${process.env.REACT_APP_API_URL}message/inbox`;
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
