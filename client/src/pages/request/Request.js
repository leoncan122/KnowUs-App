import "./Request.css";
import React, { useState } from "react";
// import { Route } from "react-router-dom";

import MessagePanel from "./components/MessagePanel";
import MessageDisplayer from "./components/MessageDisplayer";

function Request() {
    const [msg, setMsg] = useState([]);
    const [textboardState, setTextboardState] = useState("unable");

    const useRequest = (data) => {
        setTextboardState("active");
        setMsg(data);
    };

    return (
        <div className="requestPage">
            <div className="nav">Nav</div>
            <div className="content">
                {textboardState === "active" ? (
                    <MessageDisplayer className="textboard" data={msg} />
                ) : (
                    <MessagePanel className="panel" fn={useRequest} />
                )}
            </div>

            <div className="footer">
                <button
                    type="button"
                    onClick={() => {
                        setTextboardState("unable");
                    }}
                >
                    back
                </button>
            </div>
        </div>
    );
}

export default Request;
