import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import io from "socket.io-client";
import cookieMonster from "../../utils/cookieMonster";

import "./chat.css";

const Chat = () => {
    const msg = useLocation().state;
    const myUserId = cookieMonster("userId");

    const [sent, setSent] = useState({
        text: "",
        from_id: myUserId,
        to_id: msg.sender_id,
    });
    const [data, setData] = useState(null);

    const socket = io("http://localhost:4000");

    // receiving messages from server
    useEffect(() => {
        // this line serves to get all the messages of the converstation just send id's
        socket.emit("users", { from_id: myUserId, to_id: msg.sender_id });

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
            <Link to="/messages">Back</Link>
            <div className="messages-area">
                {data &&
                    data.map((message) => {
                        if (message.from_userid === msg.sender_id) {
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
