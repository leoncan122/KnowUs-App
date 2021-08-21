import "./messagePanel.css";
import React from "react";

function MessagePanel({ fn, data }) {
    return (
        <div className="panel">
            {data ? (
                data.map((post) => (
                    <button
                        key={post.id}
                        type="button"
                        onClick={() => fn(post)}
                    >
                        {post.text || post.sender}
                    </button>
                ))
            ) : (
                <center>You dont have any messages already</center>
            )}
        </div>
    );
}

export default MessagePanel;
