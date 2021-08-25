import React from "react";
import { Link } from "react-router-dom";
import "./questionMessage.css";

const QuestionMessage = ({ data }) => (
    <div className="text-question">
        <h4>{data.title}</h4>
        <div className="question-info">
            <Link to={`/user/${data.senderid}`}>
                <img src={data.photo} alt="" width="40px" />
            </Link>
            <Link to={`/user/${data.senderid}`}>
                <h4> {data.sender}</h4>
            </Link>
            <p>Date: {data.date}</p>
        </div>
        <div className="question-desc">{data.text}</div>
    </div>
);

export default QuestionMessage;
