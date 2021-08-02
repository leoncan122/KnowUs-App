import "./MessagePanel.css";
import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

function MessagePanel({ fn }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/home")
            .then((res) => res.json())
            .then((data) => setPosts(data.publications));
    }, [posts]);

    return (
        <div className="panel">
            {posts.map((post) => (
                <button key={post.id} type="button" onClick={() => fn(post)}>
                    {post.text}
                </button>
            ))}
        </div>
    );
}

export default MessagePanel;
