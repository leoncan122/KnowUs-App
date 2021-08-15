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

    // receiving messages from server
    useEffect(() => {
        socket.emit("priv-msg", sent);
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
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    name="text"
                    type="input"
                    value={sent.text}
                    onChange={handleMsg}
                />
                <input type="submit" value="send" />
            </form>

            {data && data.map((msg) => <p>{msg.text}</p>)}
        </div>
    );
};

export default Chat;
