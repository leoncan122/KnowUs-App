import "./inbox.css";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Route } from "react-router-dom";
import fetchData from "../../utils/fetchData";
import Chat from "./Chat";
import MessagePanel from "../request/components/panel/MessagePanel";
import { userContext } from "../../context/userContext";

function MessagesInbox() {
    const [msgSelected, setMsgSelected] = useState(null);
    const [data, setData] = useState(null);
    const [textboardState, setTextboardState] = useState("unable");
    const {userLoged} = useContext(userContext)

    // ids to start a conversation
    const { id } = useParams();
    const {userId} = userLoged

    useEffect(() => {
        async function fetching() {
            const url = `${process.env.REACT_APP_API_URL}message/inbox`;
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
                {textboardState === "active" || id ? (
                    <Chat to={id || msgSelected.sender_id} from={userId} />
                ) : (
                    <MessagePanel fn={useRequest} data={data} />
                )}
            </div>
        </div>
    );
}

export default MessagesInbox;
