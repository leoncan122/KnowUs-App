import "./messagePanel.css";
import React, { useState } from "react";

function MessagePanel({ fn, data }) {
    const [posts, setPosts] = useState(data);
    console.log(setPosts, posts);

    return (
        <div className="panel">
            {data &&
                data.map((post) => (
                    <button
                        key={post.id}
                        type="button"
                        onClick={() => fn(post)}
                    >
                        {post.text || post.sender}
                    </button>
                ))}
        </div>
    );
}

export default MessagePanel;
