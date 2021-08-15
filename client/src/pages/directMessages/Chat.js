import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const Chat = () => {
    const [sent, setSent] = useState({
        text: "",
        from_id: parseInt(1, 10),
        to_id: parseInt(5, 10),
    });

    const [data, setData] = useState(null);
    const socket = io("http://localhost:4000");
    console.log(data);

    // receiving messages from server
    useEffect(() => {
        socket.on("priv-msg", (messages) => {
            console.log(messages);

            setData(messages);
        });
    }, []);

    const handleMsg = (e) => {
        setSent({
            ...sent,
            [e.target.name]: e.target.value,
        });
        console.log(sent);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // sending messages to server
        socket.emit("priv-msg", sent);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea name="text" type="input" onChange={handleMsg} />
                <input type="submit" value="send" />
            </form>

            {data && data.map((msg) => <p>{msg.text}</p>)}
        </div>
    );
};

export default Chat;
