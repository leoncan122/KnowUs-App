import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const Chat = ({ to, from }) => {
    const [sent, setSent] = useState({
        text: "",
        from_id: from,
        to_id: to,
    });

    const [data, setData] = useState(null);
    const socket = io("http://localhost:4000");
    console.log(data);

    // receiving messages from server
    useEffect(() => {
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

        // sending messages to server
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
                                <div className="text-question">{msg.text}</div>
                            );
                        }

                        return <div className="text-answer">{msg.text}</div>;
                    })}
            </div>

            <form onSubmit={handleSubmit}>
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
