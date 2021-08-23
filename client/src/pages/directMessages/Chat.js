import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./chat.css";

const Chat = ({ to, from }) => {
    const [sent, setSent] = useState({
        text: "",
        from_id: from,
        to_id: to,
    });

    const [data, setData] = useState(null);
    const socket = io(process.env.REACT_APP_API_URL);

    // receiving messages from server
    useEffect(() => {
        // this line serves to get all the messages of the converstation just send id's
        socket.emit("users", { from_id: from, to_id: to });

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
        <>
            <div className="messages-area">
                {data &&
                    data.map((msg) => {
                        if (msg.from_userid === to) {
                            return (
                                <div key={msg.id} className="msg-question">
                                    {msg.text}
                                </div>
                            );
                        }

                        return (
                            <div key={msg.id} className="msg-answer">
                                {msg.text}
                            </div>
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
        </>
    );
};

export default Chat;
