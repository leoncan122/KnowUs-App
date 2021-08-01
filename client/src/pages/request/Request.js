import "./Request.css";
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

import MessagePanel from "./components/MessagePanel";
import MessageDisplayer from "./components/MessageDisplayer";

function Request() {
    const [msg, setMsg] = useState([]);
    const [textState, setTextState] = useState("off");

    const msgToDisplay = (data) => {
        setTextState("on");
        if (textState === "off") {
            setTextState("on");
        }
        setMsg(data);
    };

    return (
        <div className="requestPage">
            <div className="nav">Nav</div>
            <div className="content">
                {textState === "on" ? (
                    <Route>
                        <MessageDisplayer className="textboard" data={msg} />
                    </Route>
                ) : (
                    <Route>
                        <MessagePanel className="panel" fn={msgToDisplay} />
                    </Route>
                )}
            </div>

            <div className="footer">
                <Link to="/user/questions/all">footer</Link>
            </div>
        </div>
    );
}

export default Request;
