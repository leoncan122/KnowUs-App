import React, { useContext } from "react";
import { userContext } from "../../../../context/userContext";
import "./answerMessage.css";

const AnswerMessage = ({ refAnswer, response }) => {
    const { userLoged } = useContext(userContext);

    return (
        <div className="text-answer">
            <div className="answer-desc" ref={refAnswer} />
            <div className="answer-info">
                <h4>{userLoged.userName}</h4>
                <img src={userLoged.userPhoto} alt="" width="30px" />
                <p>Date:{response.date}</p>
            </div>
        </div>
    );
};

export default AnswerMessage;
