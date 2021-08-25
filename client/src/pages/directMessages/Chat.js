import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import io from "socket.io-client";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { userContext } from "../../context/userContext";

import "./chat.css";

const Chat = () => {
    const { userId } = useParams();
    const msg = useLocation().state;
    const { userLoged } = useContext(userContext);
    const to = msg ? msg.sender_id : userId;

    const [sent, setSent] = useState({
        text: "",
        from_id: userLoged.userId,
        to_id: to,
    });
    const [data, setData] = useState(null);
    const socket = io(process.env.REACT_APP_API_URL);

    // receiving messages from server
    useEffect(() => {
        // this line serves to get all the messages of the converstation just send id's
        socket.emit("users", {
            from_id: userLoged.userId,
            to_id: userId || msg.sender_id,
        });

        // receiveing messages from socket
        socket.on("priv-msg", (messages) => {
            setData(messages);
        });
    }, []);

    const handleMsg = (e) => {
        setSent({
            ...sent,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // sending messages to socket
        socket.emit("priv-msg", sent);

        setSent({ ...sent, text: "" });
    };
    return (
        <div className="chat-content">
            <Link to="/messages">
                <ArrowBackIosIcon />{" "}
            </Link>
            <div className="messages-area">
                {data &&
                    data.map((message) => {
                        if (message.from_userid === to) {
                            return (
                                <p key={message.id} className="msg-question">
                                    {message.text}
                                </p>
                            );
                        }

                        return (
                            <p key={message.id} className="msg-answer">
                                {message.text}
                            </p>
                        );
                    })}
            </div>

            <form className="chat-dashboard" onSubmit={handleSubmit}>
                <textarea
                    name="text"
                    type="input"
                    className="dashboard"
                    value={sent.text}
                    onChange={handleMsg}
                />
                <input type="submit" value="send" />
            </form>
        </div>
    );
};

export default Chat;
